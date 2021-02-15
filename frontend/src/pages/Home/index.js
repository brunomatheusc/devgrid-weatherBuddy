import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import WeatherCard from '../../components/WeatherCard';

import { Container, Header, InputWrapper, Wrapper, LastWeather } from './styles';

const Home = () => {
	const [cityName, setCityName] = useState('');

	useEffect(() => {

	}, []);

	async function handleCityWeather() {

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
					<Input value={cityName} onChange={(e) => setCityName(e.target.value)} />
					<p>now?</p>				
				</InputWrapper>

				<WeatherCard cityName="Curitiba" condition="Clouds" temperature={20} />

				<LastWeather>
					{ [0, 1, 2, 3, 4].map((weather, index) => {
						return (<WeatherCard key={index} cityName="Curitiba" condition="Clouds" temperature={20} />);
					})}							
				</LastWeather>
			</Wrapper>
        </Container>
    );
}

export default Home;