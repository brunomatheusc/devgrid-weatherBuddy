import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import routes from "./routes";

function bootstrap() {
	const port = process.env.PORT || 3333, app = express();

	app
		.use(cors())
		.use(express.json())
		.use(routes)
		.listen(port, () => {
			console.log(`Server started at ${port}`)
		});

}

bootstrap();