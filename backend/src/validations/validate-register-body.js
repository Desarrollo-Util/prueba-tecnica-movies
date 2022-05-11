const {
	validateId,
	validateEmail,
	validateName,
	validatePassword
} = require('./user-validation');

const validateRegisterBody = body => {
	const { id, name, email, password } = body;

	if (!validateId(id)) return { error: 'El formato del id no es correcto' };

	if (!validateEmail(email))
		return { error: 'El formato del email no es correcto' };

	if (!validateName(name))
		return { error: 'El formato del nombre no es correcto' };

	if (!validatePassword(password))
		return { error: 'El formato de la contraseña no es correcto' };

	return { user: { id, name, email, password } };
};

module.exports = validateRegisterBody;
