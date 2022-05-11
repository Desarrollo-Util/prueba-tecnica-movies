const { userRegisterController } = require('../controllers/user-controllers');

const registerUserRoutes = app => {
	app.post('/register', userRegisterController);
};

module.exports = registerUserRoutes;
