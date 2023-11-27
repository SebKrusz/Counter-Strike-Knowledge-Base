const knex = require("knex")(require("../knexfile"));

const index = async (_req, res) => {
	try {
		const data = await knex("website");
		res.status(200).json(data);
	} catch (err) {
		res.status(400).send(`Error retrieving website: ${err}`);
	}
};

const add = async (req, res) => {
	try {
		const result = await knex("website").insert(req.body);

		const newWebsiteId = result[0];
		const createdWebsite = await knex("website").where({
			id: newWebsiteId,
		});

		res.status(201).json(createdWebsite);
	} catch (error) {
		res.status(500).json({
			message: `Unable to create new website: ${error}`,
		});
	}
};

const update = async (req, res) => {
	try {
		const rowsUpdated = await knex("website")
			.where({ id: req.params.id })
			.update(req.body);

		if (rowsUpdated === 0) {
			return res.status(404).json({
				message: `Website with ID ${req.params.id} not found`,
			});
		}

		const updatedWebsite = await knex("website").where({
			id: req.params.id,
		});

		res.json(updatedWebsite[0]);
	} catch (error) {
		res.status(500).json({
			message: `Unable to update website with ID ${req.params.id}: ${error}`,
		});
	}
};

const remove = async (req, res) => {
	try {
		const rowsDeleted = await knex("website")
			.where({ id: req.params.id })
			.delete();

		if (rowsDeleted === 0) {
			return res.status(404).json({
				message: `website with ID ${req.params.id} not found`,
			});
		}

		res.sendStatus(204);
	} catch (error) {
		res.status(500).json({
			message: `Unable to delete website: ${error}`,
		});
	}
};

const findWebsite = async (req, res) => {
	try {
		const websiteId = await knex("website").select(
			"website.id",
			"website.website_domain",
			"website.website_general_description as description",
			"website.category",
			"website.gambling",
			"website.fee",
			"website.age",
			"website.location",
			"website.payment"
		);

		if (websiteId.length === 0) {
			return res.status(404).json({
				message: `Website with ID ${req.params.id} not found`,
			});
		}

		const websiteData = websiteId[0];
		res.json(websiteData);
	} catch (error) {
		res.status(500).json({
			message: `Unable to retrieve website data for website with ID ${req.params.id}: ${error}`,
		});
	}
};

const findOne = async (req, res) => {
	try {
		const websiteId = req.params.id;
		const websiteData = await knex("website")
			.select(
				"website.id",
				"website.website_domain",
				"website.website_general_description as description",
				"website.category",
				"website.gambling",
				"website.fee",
				"website.age",
				"website.location",
				"website.payment"
			)
			.where("website.id", websiteId)
			.first();

		if (!websiteData) {
			return res.status(404).json({
				message: `Website with ID ${websiteId} not found`,
			});
		}

		res.json(websiteData);
	} catch (error) {
		res.status(500).json({
			message: `Unable to retrieve website data for website with ID ${req.params.id}: ${error}`,
		});
	}
};

module.exports = {
	index,
	add,
	update,
	remove,
	findWebsite,
	findOne, // Add the findOne function to the exports
};
