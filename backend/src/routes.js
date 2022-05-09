const { userRegisterController } = require('./controllers');

const registerRoutes = app => {
	app.post('/register', userRegisterController);
};

module.exports = registerRoutes;
