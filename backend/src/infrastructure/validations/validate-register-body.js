const {
	validateId,
	validateEmail,
	validateName,
	validatePassword
} = require('../../domain/validations/user-validation');
const BadRequestException = require('../errors/bad-request.exception');

const validateRegisterBody = body => {
	const { id, name, email, password } = body;

	if (!validateId(id))
		throw new BadRequestException('El formato del id no es correcto');

	if (!validateEmail(email))
		throw new BadRequestException('El formato del email no es correcto');

	if (!validateName(name))
		throw new BadRequestException('El formato del nombre no es correcto');

	if (!validatePassword(password))
		throw new BadRequestException('El formato de la contraseña no es correcto');

	return { id, name, email, password };
};

module.exports = validateRegisterBody;
