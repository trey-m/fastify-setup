const module1Router = require('../module-1');
const module2Router = require('../module-2');

const router = async (app, opts, next) => {
	app.register(module1Router, { prefix: '/api/module1' });
	app.register(module2Router, { prefix: '/api/module2' });

	next();
};

module.exports = router;
