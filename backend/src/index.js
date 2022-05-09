const app = require('./app');

app.listen(process.env.PORT, () =>
	console.log(`Servidor de Express levantado en el puerto ${process.env.PORT}`)
);
