import { Request, Response } from 'express';
import Weather from '../helpers/Weather';
import { redisClient } from '../middleware/common';
import weatherService from '../services/WeatherService';

class WeatherController {
	async getWeatherByCityName(req: Request, res: Response): Promise<Response<Weather | null>> {
		const { cityName } = req.params;

		const weather = await weatherService.getWeatherByCityName(cityName);

		if (!weather) {
			return res.json(null);
		}

		redisClient.setex(cityName, 300, JSON.stringify(weather));

		return res.json(weather);
	}

	async getCachedCities(req: Request, res: Response) {
		const { max = 0 } = req.query;

		const cachedCities = await weatherService.getAllCachedKeys(Number(max));

		return res.json(cachedCities);
	}
}

export default new WeatherController();