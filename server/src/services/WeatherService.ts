import api from "../utils/api";

class WeatherService {
	async getWeatherByCityName(cityName: string) {
		try {
			const cityWeather = await api.get('/weather', { params: {
				'APPID': process.env.appID,
				'q': cityName
			}});

			return cityWeather.data;
		} catch (error) {
			console.log(error);			
		}

		return null;
	}
}

export default new WeatherService();