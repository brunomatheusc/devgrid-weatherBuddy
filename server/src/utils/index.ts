import Weather from '../helpers/Weather';
import { redisClient } from './../middleware/common';

export function getRedisData(key: string): Promise<Weather> {
	return new Promise(function(resolve, reject) {
		redisClient.get(key, (err, data) => {
			if (err) {
				reject(err);
			}

			if (data) {
				console.log(JSON.parse(data).name);
				resolve(JSON.parse(data));
			}
		});
	});
}