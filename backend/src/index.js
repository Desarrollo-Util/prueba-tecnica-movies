const app = require('./app');
const { MikroORM } = require('@mikro-orm/core');
const dotenv = require('dotenv');
const { userSchema } = require('./entities/user');
dotenv.config();

const bootstrap = async () => {
	await MikroORM.init({
		port: process.env.POSTGRESQL_PORT,
		user: process.env.POSTGRESQL_USER,
		password: process.env.POSTGRESQL_PASSWORD,
		entities: [userSchema],
		dbName: 'pruebaTecnica',
		type: 'postgresql'
	});

	app.listen(process.env.PORT, () =>
		console.log(
			`Servidor de Express levantado en el puerto ${process.env.PORT}`
		)
	);
};

bootstrap();
