const router = async (app, opts, next) => {
  // These can be broken out into controllers for
  // individual resources.
  // IE. userRoutes.js
  app.register((app, opts, next) => {
    app.get('/', async (request, reply) => {
      reply.send({health: 'OK'})
    })
    next()
  }, { prefix: '/health' })

  app.register((app, opts, next) => {
    app.get('/', async (request, reply) => {
      reply.send(await app.services.userService.getUsers())
    })
    next()
  }, { prefix: '/users' })

  next()
}

module.exports = router
