import { redisClient } from "../middleware/common";
import api from "../utils/api";

class WeatherService {
	async getWeatherByCityName(cityName: string) {
		try {
			const cityWeather = await api.get('/weather', { params: {
				'APPID': process.env.appID,
				'q': cityName,
				'units': 'metric'
			}});

			return cityWeather.data;
		} catch (error) {
			console.log(error);			
		}

		return null;
	}

	async getAllCachedKeys(max: number) {
		const cachedCities: string[] = [];

		let promise = new Promise(function(resolve, reject) {
			redisClient.keys('*', (err, keys) => {
				if (err) {
					reject();
				}
	
				keys.map(key => {
					redisClient.get(key, (err, data) => {
						if (err) {
							throw err;
						}

						if (data) {
							console.log(JSON.parse(data).name);
							cachedCities.push(JSON.parse(data).name);
						}
					});

					console.log(key);

					if (max == 0 || cachedCities.length < max) {
						cachedCities.push(key);
					}
				});

				resolve(cachedCities);
			});
		});

		await promise;
		
		return cachedCities;
	}
}

export default new WeatherService();