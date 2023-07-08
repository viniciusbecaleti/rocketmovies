const AppError = require("../utils/AppError")
const knex = require("../database/knex")
const { v4: uuid } = require("uuid")

class MoviesController {
  async index(req, res) {
    const { id: user_id } = req.user

    await knex.transaction(async trx => {
      const movies = await trx("movies").select("*").where({ user_id }).orderBy("created_at", "desc")
      const tags = await trx("tags").select("*").orderBy("name", "asc")

      const splitedMovies = movies.map(movie => {
        return {
          ...movie,
          tags: tags.filter(tag => tag.movie_id === movie.id)
        }
      })

      return res.json(splitedMovies)
    })
  }

  async show(req, res) {
    const { id: user_id } = req.user
    const { movie_id } = req.params

    await knex.transaction(async trx => {
      const movie = await trx("movies").select("*").where({ id: movie_id, user_id }).first()

      if (!movie) {
        throw new AppError("Movie not found")
      }

      const tags = await trx("tags").select("*").where({ movie_id }).orderBy("name", "asc")

      return res.json({
        ...movie,
        tags
      })
    })
  }

  async create(req, res) {
    const { id: user_id } = req.user
    const { title, description, rating, tags } = req.body

    const user = await knex("users").select("*").where({ id: user_id }).first()

    if (!user) {
      throw new AppError("User not found")
    }

    if (!title) {
      throw new AppError("Title is required")
    }

    if (!description) {
      throw new AppError("Description is required")
    }

    if (!rating) {
      throw new AppError("Rating is required")
    }

    if (rating < 1 || rating > 5) {
      throw new AppError("Rating needs to be between 1 and 5")
    }

    if (!tags) {
      throw new AppError("Tags is required")
    }

    const movie_id = uuid()

    await knex.transaction(async trx => {
      await trx("movies").insert({ id: movie_id, title, description, rating, user_id })

      const splitedTags = tags.map(tag => {
        return {
          name: tag,
          movie_id
        }
      })

      for (const tag of splitedTags) {
        const tag_id = uuid()

        await trx("tags").insert({ id: tag_id, ...tag })
      }
    })

    return res.sendStatus(201)
  }

  async update(req, res) {
    const { id: user_id } = req.user
    const { movie_id } = req.params
    const { title, description, rating, tags } = req.body

    const movie = await knex("movies").select("*").where({ id: movie_id, user_id }).first()

    if (!movie) {
      throw new AppError("Movie not found")
    }

    if (title) {
      movie.title = title
    }

    if (description) {
      movie.description = description
    }

    if (rating) {
      if (rating < 1 || rating > 5) {
        throw new AppError("Rating needs to be between 1 and 5")
      }

      movie.rating = rating
    }

    if (tags) {
      await knex.transaction(async trx => {
        await trx("tags").where({ movie_id }).del()

        const splitedTags = tags.map(tag => {
          return {
            name: tag,
            movie_id
          }
        })

        for (const tag of splitedTags) {
          const tag_id = uuid()

          await trx("tags").insert({ id: tag_id, ...tag })
        }
      })
    }

    await knex("movies").update({ ...movie, updated_at: knex.fn.now() }).where({ id: movie_id })

    return res.sendStatus(200)
  }

  async delete(req, res) {
    const { id: user_id } = req.user
    const { movie_id } = req.params

    const movie = await knex("movies").select("*").where({ id: movie_id, user_id }).first()

    if (!movie) {
      throw new AppError("Movie not found")
    }

    await knex("movies").where({ id: movie_id }).del()

    return res.sendStatus(200)
  }
}

module.exports = MoviesController
