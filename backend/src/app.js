const express = require('express');
const { test: validateUuid } = require('uuid-random');
const { findUserById, findUserByEmail, addUser } = require('./bbdd');
const dotenv = require('dotenv');
dotenv.config();

const expressApp = express();

// Middleware
expressApp.use(express.json());

// Regex validations
const emailRegex =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^([A-Z\-\s\u00e1\u00e9\u00ed\u00f3\u00fa\u00f1]){2,30}$/i;

// Endpoints
expressApp.post('/register', (req, res) => {
	const { body } = req;
	const { id, name, email, password } = body;

	// Validar los campos
	if (!id || typeof id !== 'string' || !validateUuid(id))
		return res.status(400).send('El formato del id no es correcto');
	if (!email || typeof email !== 'string' || !emailRegex.test(email))
		return res.status(400).send('El formato del email no es correcto');
	if (!name || typeof name !== 'string' || !nameRegex.test(name))
		return res.status(400).send('El formato del nombre no es correcto');
	if (
		!password ||
		typeof password !== 'string' ||
		password.length < 8 ||
		password.length > 20
	)
		return res.status(400).send('El formato de la contraseña no es correcto');

	// Validar que el usuario es único en persistencia (id, email)
	const existingUser = findUserById(id) || findUserByEmail(email);
	if (existingUser)
		return res.status(409).send('El usuario ya se encuentra registrado');

	// Persistir en BBDD
	addUser({
		id,
		name,
		email,
		password
	});

	return res.send('El usuario se ha registrado de forma correcta');
});

module.exports = expressApp;
