const { Router } = require("express")
const MoviesController = require("../controllers/MoviesController")

const moviesRoutes = Router()
const moviesController = new MoviesController()

moviesRoutes.get("/", moviesController.index)
moviesRoutes.get("/:movie_id", moviesController.show)
moviesRoutes.post("/:user_id", moviesController.create)
moviesRoutes.put("/:movie_id", moviesController.update)
moviesRoutes.delete("/:movie_id", moviesController.delete)

module.exports = moviesRoutes
