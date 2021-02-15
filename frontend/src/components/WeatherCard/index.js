import React, { FC } from 'react';

import { Container } from './styles';

const WeatherCard = ({ cityName, temperature, condition, ...rest }) => {
  	return (
		<Container>
			<p>{ cityName }</p>
			<h2>{ `${temperature}ºC`}</h2>
			<p>{ condition }</p>
		</Container>
	);
}

export default WeatherCard;