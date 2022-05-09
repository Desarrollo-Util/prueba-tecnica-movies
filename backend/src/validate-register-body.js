const { test: validateUuid } = require('uuid-random');

// Regex validations
const emailRegex =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^([A-Z\-\s\u00e1\u00e9\u00ed\u00f3\u00fa\u00f1]){2,30}$/i;

const validateRegisterBody = body => {
	const { id, name, email, password } = body;

	// Validar los campos
	if (!id || typeof id !== 'string' || !validateUuid(id))
		return { error: 'El formato del id no es correcto' };

	if (!email || typeof email !== 'string' || !emailRegex.test(email))
		return { error: 'El formato del email no es correcto' };

	if (!name || typeof name !== 'string' || !nameRegex.test(name))
		return { error: 'El formato del nombre no es correcto' };

	if (
		!password ||
		typeof password !== 'string' ||
		password.length < 8 ||
		password.length > 20
	)
		return { error: 'El formato de la contraseña no es correcto' };

	return { user: { id, name, email, password } };
};

module.exports = validateRegisterBody;
