const fastify = require("fastify")
const routes = require('./plugins/routes')
const userService = require('./services/userService')
const userRepository = require('./repositories/userRepository')

const app = async (options) => {
  const app = fastify(options)
  app.register(routes)

  app.decorate("services", {
    userService: userService(app)
  })
  app.decorate("repositories", {
    userRepository: userRepository(app)
  })
  return app
}

module.exports = app
