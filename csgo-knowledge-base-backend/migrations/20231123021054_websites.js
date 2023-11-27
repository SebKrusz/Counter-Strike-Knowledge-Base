/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("website", (table) => {
		table.increments("id").primary();
		table.string("website_id").notNullable();
		table.string("website_domain").notNullable();
		table.string("website_general_description").notNullable();
		table.string("category").notNullable();
		table.integer("gambling").notNullable();
		table.timestamp("created_at").defaultTo(knex.fn.now());
		table
			.timestamp("updated_at")
			.defaultTo(
				knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
			);
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("website");
};
