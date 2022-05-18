const dotenv = require('dotenv');
dotenv.config();

const {
	initializeHttpServer
} = require('./infrastructure/config/initialize-http');
const { initializeOrm } = require('./infrastructure/config/initialize-orm');

const bootstrap = async () => {
	await initializeOrm();
	const httpServer = initializeHttpServer();

	httpServer.listen(process.env.PORT, () =>
		console.log(
			`Servidor de Express levantado en el puerto ${process.env.PORT}`
		)
	);
};

bootstrap();
