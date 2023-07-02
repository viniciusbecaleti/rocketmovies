const { Router } = require("express")
const usersRoutes = require("./users.routes")
const moviesRoutes = require("./movies.routes")
const sessionsRoutes = require("./sessions.routes")

const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/sessions", sessionsRoutes)
routes.use("/movies", moviesRoutes)

module.exports = routes
