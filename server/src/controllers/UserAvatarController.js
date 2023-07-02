const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const DiskStorage = require("../providers/DiskStorage")

const allowedType = [
  "image/png",
  "image/jpeg"
]

const diskStorage = new DiskStorage()

class UserAvatarController {
  async update(req, res) {
    const { id: user_id } = req.user
    const { filename, mimetype } = req.file

    if (!allowedType.includes(mimetype)) {
      await diskStorage.deleteTmpFile(filename)
      throw new AppError("Archive type not allowed", 415)
    }

    const user = await knex("users").select("*").where({ id: user_id }).first()

    if (user.avatar) {
      await diskStorage.deleteFile(user.avatar)
    }

    user.avatar = filename

    await diskStorage.saveFile(filename)

    await knex("users").update(user).where({ id: user_id })

    res.sendStatus(200)
  }
}

module.exports = UserAvatarController
