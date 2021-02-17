import express, { Application } from 'express';
import cors from 'cors';
import routes from './routes';

class App {
	public server: Application;

	constructor() {
		this.server = express();		
		this.server.use(cors());

		this.middlewares();
		this.route();
	}

	middlewares() {
		this.server.use(express.json());
	}

	route() {
		this.server.use(routes);
	}
}

export default new App().server;