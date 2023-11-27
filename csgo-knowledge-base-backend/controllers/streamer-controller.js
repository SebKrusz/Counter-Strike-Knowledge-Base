const knex = require("knex")(require("../knexfile"));

const index = async (_req, res) => {
	try {
		const data = await knex("streamer");
		res.status(200).json(data);
	} catch (err) {
		res.status(400).send(`Error retrieving streamers: ${err}`);
	}
};

const add = async (req, res) => {
	try {
		const result = await knex("streamer").insert(req.body);

		const newStreamerId = result[0];
		const createdStreamer = await knex("streamer").where({
			id: newStreamerId,
		});

		res.status(201).json(createdStreamer);
	} catch (error) {
		res.status(500).json({
			message: `Unable to create new streamer: ${error}`,
		});
	}
};

const update = async (req, res) => {
	try {
		const rowsUpdated = await knex("streamer")
			.where({ id: req.params.id })
			.update(req.body);

		if (rowsUpdated === 0) {
			return res.status(404).json({
				message: `streamer with ID ${req.params.id} not found`,
			});
		}

		const updatedStreamer = await knex("streamer").where({
			id: req.params.id,
		});

		res.json(updatedStreamer[0]);
	} catch (error) {
		res.status(500).json({
			message: `Unable to update streamer with ID ${req.params.id}: ${error}`,
		});
	}
};

const remove = async (req, res) => {
	try {
		const rowsDeleted = await knex("streamer")
			.where({ id: req.params.id })
			.delete();

		if (rowsDeleted === 0) {
			return res.status(404).json({
				message: `streamer with ID ${req.params.id} not found`,
			});
		}

		res.sendStatus(204);
	} catch (error) {
		res.status(500).json({
			message: `Unable to delete streamer: ${error}`,
		});
	}
};

const findOne = async (req, res) => {
	try {
		const streamerId = await knex("streamer").where({
			id: req.params.id,
		});

		if (streamerId.length === 0) {
			return res.status(404).json({
				message: `Streamer with ID ${req.params.id} not found`,
			});
		}

		const streamerData = streamerId[0];
		res.json(streamerData);
	} catch (error) {
		res.status(500).json({
			message: `Unable to retrieve streamer data for streamer with ID ${req.params.id}`,
		});
	}
};

module.exports = {
	index,
	add,
	update,
	remove,
	findOne,
};
