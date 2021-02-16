import React from 'react';

import { Container } from './styles';

export default function WeatherCard({ cityName, temperature, condition, ...rest }){
  	return (
		<Container { ...rest }>
			<p>{ cityName }</p>
			<h2>{ `${temperature}ºC`}</h2>
			<p>{ condition }</p>
		</Container>
	);
}