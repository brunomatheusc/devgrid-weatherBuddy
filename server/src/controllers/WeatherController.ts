import { Request, Response } from 'express';
import weatherService from '../services/WeatherService';

class WeatherController {
	async getWeatherByCityName(req: Request, res: Response) {
		const { cityName } = req.params;

		const weather = await weatherService.getWeatherByCityName(cityName);

		return res.json(weather ? weather : 'City not found');
	}

	async getCachedCities(req: Request, res: Response) {

	}
}

export default new WeatherController();