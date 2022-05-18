const {
	validateEmail,
	validatePassword
} = require('../../domain/validations/user-validation');

const validateLoginBody = body => {
	const { email, password } = body;

	if (!validateEmail(email) || !validatePassword(password))
		return { error: 'Las credenciales son incorrectas' };

	return { loginData: { email, password } };
};

module.exports = validateLoginBody;
