const { MikroORM } = require('@mikro-orm/core');
const mikroORMConfig = require('./mikro-orm.config');

let orm, entityManager;

const configDDBB = async () => {
	const schemaGenerator = orm.getSchemaGenerator();
	await schemaGenerator.updateSchema();
};

const initializeOrm = async () => {
	orm = await MikroORM.init(mikroORMConfig);
	const isConnected = await orm.isConnected();

	if (!isConnected) throw new Error('Failed to connect to database');

	await configDDBB();

	entityManager = orm.em;
	console.log(entityManager);
};

const getEntityManager = () => {
	return entityManager;
};

module.exports = { initializeOrm, getEntityManager };
