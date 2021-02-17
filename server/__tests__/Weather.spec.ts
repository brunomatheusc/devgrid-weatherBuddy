jest.mock('./mock');

describe('Weather', () => {
	const cities = [
		{
			name: 'Curitiba',
			temperature: 20,
			weather: 'Clouds'
		},	
		{
			name: 'Piraju',
			temperature: 25,
			weather: 'Sunny'
		}
	];

	it ('should return data from searched city', async () => {
		const weather = cities.find(city => city.name == 'Curitiba');
		expect(weather).toEqual(expect.objectContaining({ name: 'Curitiba' }));
	});

	it ('should return null data if not exists searched city', async () => {
		const weather = cities.find(city => city.name == 'New York') || null;
		expect(weather).toEqual(null);
	});
});