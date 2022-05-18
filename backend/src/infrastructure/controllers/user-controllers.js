const UserRepository = require('../repositories/user-repository');
const validateLoginBody = require('../validations/validate-login-body');
const validateRegisterBody = require('../validations/validate-register-body');

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

const userLoginController = async (req, res) => {
	// Validación de campos
	const { loginData, error } = validateLoginBody(req.body);
	if (error) return res.status(401).send(error);

	const userRepository = new UserRepository();

	const existingUserByEmail = await userRepository.findByEmail(loginData.email);
	if (
		!existingUserByEmail ||
		existingUserByEmail.password !== loginData.password
	)
		return res.status(401).send('Las credenciales son incorrectas');

	return res.send('Login correcto');
};

module.exports = { userRegisterController, userLoginController };
