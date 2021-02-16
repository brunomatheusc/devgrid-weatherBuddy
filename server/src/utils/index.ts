import Weather from '../helpers/Weather';
import { redisClient } from './../middleware/common';

export function getRedisData(key: string): Promise<Weather> {
	return new Promise(function(resolve, reject) {
		redisClient.get(key, (err, data) => {
			if (err) {
				reject(err);
			}

			if (data) {
				resolve(JSON.parse(data));
			}
		});
	});
}