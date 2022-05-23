const { RequestContext } = require('@mikro-orm/core');
const { getEntityManager } = require('../config/initialize-orm');

const contextBdMiddleware = (_, __, next) => {
	const entityManager = getEntityManager();
	RequestContext.create(entityManager, next);
};

module.exports = contextBdMiddleware;
