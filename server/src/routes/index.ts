import { Router } from 'express';
import WeatherController from '../controllers/WeatherController';

const routes = Router();

routes.use('/weather', WeatherController.getCachedCities);
routes.use('/weather/:cityName', WeatherController.getWeatherByCityName);

export default routes;