const AppError = require("../utils/AppError")

class UsersController {
  async index(req, res) {
    res.json({ message: "Hello, world!" })
  }
}

module.exports = UsersController
