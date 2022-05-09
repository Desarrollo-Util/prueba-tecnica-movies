const express = require('express');
const dotenv = require('dotenv');
const registerRoutes = require('./routes');

dotenv.config();

const expressApp = express();

// Middleware
expressApp.use(express.json());

registerRoutes(expressApp);

module.exports = expressApp;
