import { NextFunction, Request, Response, Router } from 'express';
import cors from 'cors';
import redis from 'redis';

export function handleCors(router: Router) {
	return router.use(cors());
}

export function handleCache(req: Request, res: Response, next: NextFunction) {
	const client = redis.createClient(6379);
	const { cityName } = req.params;

	client.get(cityName, (err, data) => {
		if (err) {
			throw err;
		}

		if (data) {
			res.json(data);
		} else {
			next();
		}
	});
}