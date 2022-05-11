const { createServer } = require('http');
const express = require('express');
const registerUserRoutes = require('./routes/user-routes');

const expressApp = express();

// Middleware
expressApp.use(express.json());

registerUserRoutes(expressApp);

const httpServer = createServer(expressApp);

module.exports = httpServer;
