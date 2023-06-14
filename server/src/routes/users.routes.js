const { Router } = require("express")
const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()
const usersController = new UsersController()

usersRoutes.get("/", usersController.index)
usersRoutes.get("/:user_id", usersController.show)
usersRoutes.post("/", usersController.create)
usersRoutes.put("/:user_id", usersController.update)
usersRoutes.delete("/:user_id", usersController.delete)

module.exports = usersRoutes
