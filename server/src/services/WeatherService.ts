import Weather from "../helpers/Weather";
import { redisClient } from "../middleware/common";
import { getRedisData } from "../utils";
import api from "../utils/api";

class WeatherService {
	async getWeatherByCityName(cityName: string): Promise<Weather | null> {
		try {
			const cityWeather = (await api.get('/weather', { params: {
				'APPID': process.env.appID,
				'q': cityName,
				'units': 'metric'
			}})).data;

			const { name, weather, main: { temp } } = cityWeather;
			const { main } = weather[0]; 

			return { name, weather: main, temperature: temp };
		} catch (error) {
			console.log(error);			
		}

		return null;
	}

	async getAllCachedKeys(max = 5) {
		const cachedCities: string[] = [];

		let promise = new Promise(function(resolve, reject) {
			redisClient.keys('*', (err, keys) => {
				if (err) {
					reject();
				}
	
				keys.map(key => {
					if (max == 0 || cachedCities.length < max) {
						cachedCities.push(key);
					}
				});

				resolve(cachedCities);
			});
		});

		await promise;

		const cities: Weather[] = [];
		for (const city of cachedCities) {
			const data = await getRedisData(city);
			cities.push(data);
		};
		
		return cities;
	}
}

export default new WeatherService();