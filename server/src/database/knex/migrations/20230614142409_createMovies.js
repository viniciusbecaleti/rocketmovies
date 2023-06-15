exports.up = function(knex) {
  return knex.schema.createTable("movies", table => {
    table.uuid("id").primary().notNullable()
    table.string("title").notNullable()
    table.text("description").notNullable()
    table.integer("rating").notNullable().checkBetween([1, 5])
    table.uuid("user_id").notNullable().references("id").inTable("users").onDelete("CASCADE")
    table.timestamp("created_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable("movies")
}
