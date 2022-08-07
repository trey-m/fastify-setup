const app = require("./app")
const port = process.env.PORT || 3000
const host = '0.0.0.0'
let server

const startServer = async () => {
  try {
    server = await app({ logger: true, pluginTimeout: 20000 })
    await server.listen(port, host)
    server.log.info(`🚀 Fastify demo is now running on port ${port}`)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

startServer()
