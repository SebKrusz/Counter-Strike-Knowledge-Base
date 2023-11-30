// itemcheck-controller.js

const knex = require("knex")(require("../knexfile"));

const getAllItemChecks = async (req, res) => {
	try {
		const itemChecks = await knex.select().from("itemcheck");
		res.json(itemChecks);
	} catch (error) {
		console.error("Error in getAllItemChecks:", error);
		res.status(500).json({ message: error.message });
	}
};

const getItemCheckById = async (req, res) => {
	const id = req.params.id;
	try {
		const itemCheck = await knex
			.select()
			.from("itemcheck")
			.where({ id })
			.first();
		res.json(itemCheck);
	} catch (error) {
		console.error("Error in getItemCheckById:", error);
		res.status(500).json({ message: error.message });
	}
};

const addItemCheck = async (req, res) => {
	const { price_factor, weapon, skin, float, pattern, name } = req.body;

	const defaultValues = {
		weapon: weapon || "DefaultWeapon",
		skin: skin || "DefaultSkin",
		float: float || 0.0,
		pattern: pattern || 0,
		name: name || "DefaultName",
		price_factor: price_factor || " has no info for",
	};

	// Validate required fields
	if (
		!defaultValues.weapon ||
		!defaultValues.skin ||
		!defaultValues.float ||
		!defaultValues.pattern
	) {
		return res.status(400).json({ message: "Missing required fields." });
	}

	try {
		const newItemCheckId = await knex("itemcheck").insert({
			...defaultValues,
		});

		const newItemCheck = await knex
			.select()
			.from("itemcheck")
			.where({ id: newItemCheckId[0] })
			.first();

		res.status(201).json(newItemCheck);
	} catch (error) {
		// Handle specific database errors
		if (error.code === "ER_DUP_ENTRY") {
			return res
				.status(400)
				.json({ message: "Duplicate entry. Item already exists." });
		}

		console.error("Error in addItemCheck:", error);
		res.status(500).json({ message: error.message });
	}
};
const checkItem = async (req, res) => {
	const { weapon, skin, float, pattern } = req.body;

	try {
		const itemCheck = await knex
			.select()
			.from("itemcheck")
			.where({
				weapon,
				skin,
				float,
				pattern,
			})
			.first();

		if (itemCheck) {
			if (itemCheck.pattern === 70) {
				itemCheck.price_factor = itemCheck.price_factor * 1.5;
				itemCheck.reason = "Pattern 70 affects the price factor.";
			} else {
				itemCheck.reason = "No specific adjustments for this pattern.";
			}

			res.status(200).json(itemCheck);
		} else {
			res.status(404).json({ message: "Item not found" });
		}
	} catch (error) {
		console.error("Error in checkItem:", error);
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	getAllItemChecks,
	getItemCheckById,
	addItemCheck,
	checkItem,
};
