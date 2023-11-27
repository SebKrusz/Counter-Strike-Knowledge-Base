/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	await knex("streamer").del();
	await knex("streamer").insert([
		{
			id: 1,
			streamer_id: 1,
			streamer_domain: "csfloat.com/",
			streamer_general_description:
				"This website provides a gambling and skin trading.",
			category: "Trading/Gambling",
			gambling: 1,
		},
	]);
};
