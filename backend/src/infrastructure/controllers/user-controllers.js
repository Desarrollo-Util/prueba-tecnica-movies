const {
	registerUserService,
	loginUserService
} = require('../../application/services/user-services');
const validateLoginBody = require('../validations/validate-login-body');
const validateRegisterBody = require('../validations/validate-register-body');
const { sign } = require('jsonwebtoken');

const userRegisterController = async (req, res, next) => {
	try {
		const user = validateRegisterBody(req.body);
		await registerUserService(user);

		return res.send('El usuario se ha registrado de forma correcta');
	} catch (err) {
		return next(err);
	}
};

const userLoginController = async (req, res, next) => {
	try {
		const { email, password } = validateLoginBody(req.body);
		const id = await loginUserService(email, password);

		const jwt = sign({ id }, process.env.JWT_SECRET_KEY, {
			algorithm: 'HS512',
			expiresIn: '7d'
		});

		res.cookie('jwt', jwt, { maxAge: 900000, httpOnly: true });
		return res.send('Login correcto');
	} catch (err) {
		return next(err);
	}
};

module.exports = { userRegisterController, userLoginController };
