const { createServer } = require('http');
const express = require('express');
const registerUserRoutes = require('../routes/user-routes');

const initializeHttpServer = () => {
	const expressApp = express();

	expressApp.use(express.json());

	registerUserRoutes(expressApp);

	const httpServer = createServer(expressApp);

	return httpServer;
};

module.exports = { initializeHttpServer };
