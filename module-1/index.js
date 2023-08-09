const module1Router = async (app, opts, next) => {
  app.get('/', async (request, reply) => {
    reply.send({ module1Router: 'OK' });
  });

  next();
};

module.exports = module1Router;
