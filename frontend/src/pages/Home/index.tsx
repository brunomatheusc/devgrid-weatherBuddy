import React, { FC, useEffect, useState } from 'react';
import Input from '../../components/Input';

import { Container, Header, InputWrapper, Wrapper } from './styles';

const Home: FC = () => {
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
			</Wrapper>
        </Container>
    );
}

export default Home;