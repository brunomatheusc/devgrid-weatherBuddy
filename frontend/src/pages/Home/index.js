import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import WeatherCard from '../../components/WeatherCard';

import { Container, Header, InputWrapper, Wrapper, LastWeather } from './styles';
import api from '../../services/api';
import ErrorMessage from '../../components/ErrorMessage';

const Home = () => {
	const [city, setCity] = useState(null);
	const [error, setError] = useState(false);
	const [isFirst, setIsFirst] = useState(true);
	const [lastSearches, setLastSearches] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		if (!isFirst) {
			const timer = setTimeout(() => {
				if (search) {
					handleSearchCity();
				}
			}, 1000);

			return () => clearTimeout(timer);
		}

		
		setIsFirst(false);
	}, [search]);
	
	useEffect(() => {
		(async () => {
			const response = await api.get('/weather?max=5');
			setLastSearches(response.data);
		})();
	}, [city])

	async function handleSearchCity() {
		setError(false);

		try {
			const data = (await api.get(`/weather/${search}`)).data;
			
			if (data == null) {
				setCity(null);			
				setError(true);	
				return;
			}
			
			setCity(data);
		} catch (error) {
			console.log(error);			
			setError(true);	
		}
	}

	function handleKeyPress(e) {
		setError(false);
		
		if (e.key == 'Enter') {
			handleSearchCity();
		}
	}

    return (
        <Container>
			<Header>
				<h3>Weather Buddy</h3>

				<hr/>
			</Header>

			<Wrapper>
				<InputWrapper>
					<p>How is the weather in</p>
					<Input type="text" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyPress} />
					<p>now?</p>				
				</InputWrapper>

				{ error && <ErrorMessage />}

				{ city && city.name != undefined && <WeatherCard cityName={ city.name } condition={ city.weather } temperature={parseInt(city.temperature)} />}

				{ (lastSearches.length > 0) && 
				<LastWeather>
					{ lastSearches.map(({ name, weather, temperature }, index) => {
						return (<WeatherCard key={index} cityName={ name } condition={ weather } temperature={parseInt(temperature)} />);
					})}							
				</LastWeather>
				}
			</Wrapper>
        </Container>
    );
}

export default Home;