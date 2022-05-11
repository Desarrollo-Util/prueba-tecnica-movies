const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.PORT, () =>
	console.log(`Servidor de Express levantado en el puerto ${process.env.PORT}`)
);
