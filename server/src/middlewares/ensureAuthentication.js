const { verify } = require("jsonwebtoken")
const AppError = require("../utils/AppError")
const authConfig = require("../configs/auth")

function ensureAuthentication(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new AppError("Invalid JWT token")
  }

  const [, token] = authHeader.split(" ")

  try {
    const { data: user } = verify(token, authConfig.jwt.secret)

    req.user = user

    return next()
  } catch (error) {
    throw new AppError("Invalid JWT token")
  }
}

module.exports = ensureAuthentication
