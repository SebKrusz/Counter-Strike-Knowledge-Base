const { json } = require("express");

const knex = require("knex")(require("../knexfile"));

const router = require("express").Router();

router.get("/streamer/:id", async (req, res) => {
	try {
		const data = await knex.select("*").from("streamer");

		const streamerId = parseInt(req.params.id);

		const individualstreamer = data.find(
			(streamer) => streamer.id === streamerId
		);

		res.status(200).json(individualstreamer);
	} catch (error) {
		res.status(500).json({
			message: "Unable to retrieve single streamer data",
		});
	}
});

module.exports = router;
