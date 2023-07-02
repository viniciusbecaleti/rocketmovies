const { Router } = require("express")
const MoviesController = require("../controllers/MoviesController")
const ensureAuthentication = require("../middlewares/ensureAuthentication")

const moviesRoutes = Router()
const moviesController = new MoviesController()

moviesRoutes.use(ensureAuthentication)

moviesRoutes.get("/", moviesController.index)
moviesRoutes.get("/:movie_id", moviesController.show)
moviesRoutes.post("/", moviesController.create)
moviesRoutes.put("/:movie_id", moviesController.update)
moviesRoutes.delete("/:movie_id", moviesController.delete)

module.exports = moviesRoutes
