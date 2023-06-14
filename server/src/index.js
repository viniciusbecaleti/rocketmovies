require("express-async-errors")
const express = require("express")
const routes = require("./routes")
const AppError = require("./utils/AppError")

const server = express()

server.use(express.urlencoded({ extended: false }))
server.use(express.json())
server.use(routes)
server.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    })
  }

  console.log(error)

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  })
})

const port = 3000
server.listen(port, () => console.log(`Server running on port http://localhost:${port}`))
