const { MikroORM } = require('@mikro-orm/core');
const mikroORMConfig = require('./mikro-orm.config');

let orm;

const configDDBB = async () => {
	const schemaGenerator = orm.getSchemaGenerator();
	await schemaGenerator.updateSchema();
};

const initializeOrm = async () => {
	orm = await MikroORM.init(mikroORMConfig);
	const isConnected = await orm.isConnected();

	if (!isConnected) throw new Error('Failed to connect to database');

	await configDDBB();
};

const getEntityManager = () => {
	if (!orm) throw new Error('Database is not connected');
	return orm.em.fork();
};

module.exports = { initializeOrm, getEntityManager };
