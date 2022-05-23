const ConflictException = require('../../application/errors/conflict.exception');
const UnauthorizedException = require('../../application/errors/unauthorized.exception');
const BadRequestException = require('../errors/bad-request.exception');

const errorMiddleware = (error, req, res, next) => {
	if (error instanceof BadRequestException)
		return res.status(400).send(error.message);
	if (error instanceof ConflictException)
		return res.status(409).send(error.message);
	if (error instanceof UnauthorizedException)
		return res.status(401).send(error.message);

	return res.status(500).send('Error interno del servidor');
};

module.exports = errorMiddleware;
