const { userSchema } = require('../entities/user');
const { SqlHighlighter } = require('@mikro-orm/sql-highlighter');

/** @type {import('@mikro-orm/core').Options} */
const mikroORMConfig = {
	port: process.env.POSTGRESQL_PORT,
	user: process.env.POSTGRESQL_USER,
	password: process.env.POSTGRESQL_PASSWORD,
	entities: [userSchema],
	dbName: 'postgres',
	type: 'postgresql',
	debug: true,
	highlighter: new SqlHighlighter()
};

module.exports = mikroORMConfig;
