const express = require('express');
const registerRoutes = require('./routes');

const expressApp = express();

// Middleware
expressApp.use(express.json());

registerRoutes(expressApp);

module.exports = expressApp;
