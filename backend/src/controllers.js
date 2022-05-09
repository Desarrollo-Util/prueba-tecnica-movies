const validateRegisterBody = require('./validate-register-body');
const { findUserById, findUserByEmail, addUser } = require('./bbdd');

const userRegisterController = (req, res) => {
	// Validación de campos
	const { user, error } = validateRegisterBody(req.body);
	if (error) return res.status(400).send(error);

	// Validar que el usuario es único en persistencia (id, email)
	const existingUser = findUserById(user.id) || findUserByEmail(user.email);
	if (existingUser)
		return res.status(409).send('El usuario ya se encuentra registrado');

	// Persistir en BBDD
	addUser(user);

	return res.send('El usuario se ha registrado de forma correcta');
};

module.exports = { userRegisterController };
