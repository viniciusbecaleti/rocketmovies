const movieTags = require("../../../utils/movieTags")

exports.up = function(knex) {
  return knex.schema.createTable("tags", table => {
    table.uuid("id").primary().notNullable()
    table.string("name").notNullable().checkIn([...movieTags])
    table.uuid("movie_id").notNullable().references("id").inTable("movies").onDelete("CASCADE")
  })
}


exports.down = function(knex) {
  return knex.schema.dropTable("tags")
}
