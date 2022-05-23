const { createServer } = require('http');
const express = require('express');
const registerUserRoutes = require('../routes/user-routes');
const contextBdMiddleware = require('../middlewares/context-bd-middleware');
const errorMiddleware = require('../middlewares/error-middleware');

const initializeHttpServer = () => {
	const expressApp = express();

	expressApp.use(contextBdMiddleware);
	expressApp.use(express.json());

	registerUserRoutes(expressApp);

	expressApp.use(errorMiddleware);

	const httpServer = createServer(expressApp);

	return httpServer;
};

module.exports = { initializeHttpServer };
