import { Router } from 'express';
import WeatherController from '../controllers/WeatherController';
import { handleCache } from '../middleware/common';

const routes = Router();

routes.get('/weather', WeatherController.getCachedCities);
routes.get('/weather/:cityName', handleCache, WeatherController.getWeatherByCityName);

export default routes;