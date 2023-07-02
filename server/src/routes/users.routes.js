const { Router } = require("express")
const UsersController = require("../controllers/UsersController")
const UserAvatarController = require("../controllers/UserAvatarController")
const ensureAuthentication = require("../middlewares/ensureAuthentication")
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const usersRoutes = Router()
const usersController = new UsersController()
const userAvatarController = new UserAvatarController()
const upload = multer(uploadConfig.MULTER)

usersRoutes.get("/", ensureAuthentication, usersController.show)
usersRoutes.post("/", usersController.create)
usersRoutes.put("/", ensureAuthentication, usersController.update)
usersRoutes.delete("/", ensureAuthentication, usersController.delete)
usersRoutes.patch("/avatar", ensureAuthentication, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes
