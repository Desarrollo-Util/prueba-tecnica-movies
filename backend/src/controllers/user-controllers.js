const validateRegisterBody = require('../validations/validate-register-body');
const UserRepository = require('../db');

const userRegisterController = async (req, res) => {
	// Validación de campos
	const { user, error } = validateRegisterBody(req.body);
	if (error) return res.status(400).send(error);

	const userRepository = new UserRepository();

	const existingUserById = await userRepository.findById(user.id);
	if (existingUserById) return res.status(409).send('Identificador duplicado');

	const existingUserByEmail = await userRepository.findByEmail(user.email);
	if (existingUserByEmail)
		return res.status(409).send('El email ya está en uso');

	await userRepository.create(user);
	await userRepository.commit();

	return res.send('El usuario se ha registrado de forma correcta');
};

module.exports = { userRegisterController };
