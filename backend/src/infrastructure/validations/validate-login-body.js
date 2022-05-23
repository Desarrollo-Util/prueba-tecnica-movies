const UnauthorizedException = require('../../application/errors/unauthorized.exception');
const {
	validateEmail,
	validatePassword
} = require('../../domain/validations/user-validation');
const BadRequestException = require('../errors/bad-request.exception');

const validateLoginBody = body => {
	const { email, password } = body;

	if (!email || !password) {
		throw new BadRequestException('Se espera un email y una contraseña');
	}

	if (!validateEmail(email) || !validatePassword(password))
		throw new UnauthorizedException('Las credenciales son incorrectas');

	return { email, password };
};

module.exports = validateLoginBody;
