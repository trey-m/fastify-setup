const module2Router = async (app, opts, next) => {
	app.get('/', async (request, reply) => {
		reply.send({ module2Router: 'OK' });
	});

	next();
};

module.exports = module2Router;
