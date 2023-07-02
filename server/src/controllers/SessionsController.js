const AppError = require("../utils/AppError")
const knex = require("../database/knex")
const { compare } = require("bcrypt")
const { sign } = require("jsonwebtoken")
const authConfig = require("../configs/auth")

class SessionsController {
  async create(req, res) {
    const { email, password } = req.body

    if (!email) {
      throw new AppError("Please enter an email address")
    }

    if (!password) {
      throw new AppError("Please enter a password")
    }

    const user = await knex("users").select("*").where({ email }).first()

    if (!user) {
      throw new AppError("User not found")
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError("Incorrect password")
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({
      data: {
        ...user
      }
    }, secret, {
      expiresIn
    })

    return res.json({ user, token })
  }
}

module.exports = SessionsController
