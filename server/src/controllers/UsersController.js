const AppError = require("../utils/AppError")
const { hash, compare } = require("bcrypt")
const validateEmail = require("../utils/validateEmail")
const knex = require("../database/knex")
const { v4: uuidv4 } = require("uuid")

class UsersController {
  async show(req, res) {
    const { id: user_id } = req.user

    const user = await knex("users")
      .select([
        "id",
        "name",
        "email",
        "avatar",
        "created_at",
        "updated_at"
      ])
      .where({ id: user_id })
      .first()

    if (!user) {
      throw new AppError("User not found")
    }

    return res.json(user)
  }

  async create(req, res) {
    const { name, email, password, confirmPassword } = req.body

    if (!name) {
      throw new AppError("Please enter a name")
    }

    if (!email) {
      throw new AppError("Please enter an email")
    }

    if (!password) {
      throw new AppError("Please enter a password")
    }

    if (!confirmPassword) {
      throw new AppError("Please enter a password confirmation")
    }

    const isValidEmail = validateEmail(email)

    if (!isValidEmail) {
      throw new AppError("Please enter a valid email")
    }

    const user = await knex("users").select("*").where({ email }).first()

    if (user) {
      throw new AppError("User already exists")
    }

    if (password !== confirmPassword) {
      throw new AppError("Passwords do not match")
    }

    const id = uuidv4()
    const hashedPassword = await hash(password, 10)

    await knex("users").insert({ id, name, email, password: hashedPassword })

    return res.sendStatus(201)
  }

  async update(req, res) {
    const { id: user_id } = req.user

    const user = await knex("users").select("*").where({ id: user_id }).first()

    if (!user) {
      throw new AppError("User not found")
    }

    const { name, email, oldPassword, newPassword, confirmNewPassword } = req.body

    if (name) {
      user.name = name
    }

    if (email) {
      const isValidEmail = validateEmail(email)

      if (!isValidEmail) {
        throw new AppError("Please enter a valid email")
      }

      const emailAlreadyAssigned = await knex("users").select("*").where({ email }).first()

      if (emailAlreadyAssigned) {
        throw new AppError("Email already assigned")
      }

      user.email = email
    }

    if (oldPassword || newPassword || confirmNewPassword) {
      if (!oldPassword || !newPassword || !confirmNewPassword) {
        throw new AppError("Please enter a old password, new password and confirm new password to change your password")
      }

      const isValidOldPassword = await compare(oldPassword, user.password)

      if (!isValidOldPassword) {
        throw new AppError("Old password is incorrect")
      }

      if (newPassword !== confirmNewPassword) {
        throw new AppError("New passwords do not match")
      }

      const hashedPassword = await hash(newPassword, 10)

      user.password = hashedPassword
    }

    await knex("users").update(user).where({ id: user_id })

    return res.sendStatus(200)
  }

  async delete(req, res) {
    const { id: user_id } = req.user

    const user = await knex("users").select("*").where({ id: user_id }).first()

    if (!user) {
      throw new AppError("User not found")
    }

    await knex("users").where({ id: user_id }).del()

    return res.sendStatus(204)
  }
}

module.exports = UsersController
