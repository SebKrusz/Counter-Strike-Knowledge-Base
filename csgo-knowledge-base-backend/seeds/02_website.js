/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	await knex("website").del();
	await knex("website").insert([
		{
			id: 1,
			website_id: 1,
			website_domain: "csfloat.com/",
			website_general_description:
				"This website provides a gambling and skin trading.",
			category: "Trading/Gambling",
			gambling: 1,
		},
	]);
};
