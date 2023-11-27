const { json } = require("express");

const knex = require("knex")(require("../knexfile"));

const router = require("express").Router();

router.get("/website/:id", async (req, res) => {
	try {
		const data = await knex.select("*").from("website");

		const websiteId = parseInt(req.params.id);

		const individualwebsite = data.find(
			(website) => website.id === websiteId
		);

		res.status(200).json(individualwebsite);
	} catch (error) {
		res.status(500).json({
			message: "Unable to retrieve single website data",
		});
	}
});

module.exports = router;
