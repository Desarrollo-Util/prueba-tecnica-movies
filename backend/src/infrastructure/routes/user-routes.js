const {
	userRegisterController,
	userLoginController
} = require('../controllers/user-controllers');

const registerUserRoutes = app => {
	app.post('/register', userRegisterController);
	app.post('/login', userLoginController);
};

module.exports = registerUserRoutes;
