const dotenv = require('dotenv');
dotenv.config();

const { initializeHttpServer } = require('./config/initialize-http');
const { initializeOrm } = require('./config/initialize-orm');

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
