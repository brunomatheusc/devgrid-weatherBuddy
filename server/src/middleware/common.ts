import { NextFunction, Request, Response, Router } from 'express';
import cors from 'cors';
import redis from 'redis';

export const redisClient = redis.createClient(Number(process.env.REDIS_PORT), process.env.REDIS_HOST || 'localhost');

export function handleCors(router: Router) {
	return router.use(cors());
}

export function handleCache(req: Request, res: Response, next: NextFunction) {
	const { cityName } = req.params;

	redisClient.get(cityName, (err, data) => {
		if (err) {
			throw err;
		}

		if (data) {
			res.json(JSON.parse(data));
		} else {
			next();
		}
	});
}
