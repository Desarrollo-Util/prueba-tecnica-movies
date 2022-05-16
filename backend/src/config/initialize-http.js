const { createServer } = require('http');
const express = require('express');
const registerUserRoutes = require('../routes/user-routes');
const { RequestContext } = require('@mikro-orm/core');
const { getEntityManager } = require('./initialize-orm');

const initializeHttpServer = () => {
	const expressApp = express();

	expressApp.use((_, __, next) => {
		const entityManager = getEntityManager();
		RequestContext.create(entityManager, next);
	});
	expressApp.use(express.json());

	registerUserRoutes(expressApp);

	const httpServer = createServer(expressApp);

	return httpServer;
};

module.exports = { initializeHttpServer };
