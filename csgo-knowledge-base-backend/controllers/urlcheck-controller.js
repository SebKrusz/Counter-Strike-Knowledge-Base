// urlcheck-controller.js

const knex = require("knex")(require("../knexfile"));

// Controller functions

// Extract domain from URL considering only until the end of the top-level domain
const extractDomain = (url) => {
	const match = url.match(/^https?:\/\/([^/?#]+)(?:[/?#]|$)/i);
	const fullDomain = match && match[1];
	if (fullDomain) {
		// Extract only until the end of the top-level domain
		const domainParts = fullDomain.split(".");
		const topLevelDomain = domainParts.slice(-2).join(".");
		return topLevelDomain;
	}
	return null;
};

// Get all URL checks
const checkUrls = async (req, res) => {
	const { urls } = req.body;

	try {
		// Fetch URLs from the database (excluding null values)
		const dbUrls = await knex
			.select("id", "url", "status", "domain", "category", "information")
			.from("urlcheck")
			.whereNotNull("url");

		// Check each input URL against database URLs
		const results = urls.map((inputUrl) => {
			if (!inputUrl) {
				return {
					url: inputUrl,
					status: "Invalid URL",
				};
			}

			// Add alert if "https://" is missing
			if (!inputUrl.startsWith("https://")) {
				return {
					url: inputUrl,
					status: "No Match",
					domain: "Alert: Your link is missing 'https://'. Please make sure to use a secure connection.",
					category: "URL Validation",
					information:
						"Make sure to include 'https://' in your link for a secure connection.",
				};
			}

			const inputDomain = extractDomain(inputUrl);

			const matchingUrl = dbUrls.find((dbUrl) => {
				const dbDomain = extractDomain(dbUrl.url);
				return dbDomain === inputDomain;
			});

			if (matchingUrl) {
				return {
					id: matchingUrl.id,
					url: matchingUrl.url,
					status: matchingUrl.status,
					domain: matchingUrl.domain,
					category: matchingUrl.category,
					information: matchingUrl.information,
				};
			} else {
				return {
					url: inputUrl,
					status: "No Match",
					domain: "Unable to find any matches in our database for your link, double-check your link and try again.",
					category: "Potential Phishing Website",
					information:
						"Do not visit this website, it is a potential phishing website.",
				};
			}
		});

		res.status(200).json(results);
	} catch (error) {
		console.error(error); // Log the error for debugging
		res.status(500).json({ message: "Internal Server Error" });
	}
};

// Get a specific URL check by ID
const getUrlCheckById = async (req, res) => {
	const id = req.params.id;
	try {
		const urlCheck = await knex
			.select()
			.from("urlcheck")
			.where({ id })
			.first();
		res.json(urlCheck);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Add a new URL check
const addUrlCheck = async (req, res) => {
	const { url, status, domain } = req.body;

	try {
		const newUrlCheckId = await knex("urlcheck").insert({
			url,
			status,
			domain,
		});
		const newUrlCheck = await knex
			.select()
			.from("urlcheck")
			.where({ id: newUrlCheckId[0] })
			.first();
		res.status(201).json(newUrlCheck);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// Export controller functions
module.exports = {
	checkUrls,
	getUrlCheckById,
	addUrlCheck,
};
