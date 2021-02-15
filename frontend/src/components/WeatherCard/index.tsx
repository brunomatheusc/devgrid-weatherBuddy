import React, { FC } from 'react';

import { Container } from './styles';

interface IProps {
	cityName: string;
	temperature: number;
	condition: string;
}

const WeatherCard: FC<IProps> = ({ cityName, temperature, condition, ...rest }) => {
  	return (
		<Container>
			<p>{ cityName }</p>
			<h2>{ `${temperature}º C`}</h2>
			<p>{ condition }</p>
		</Container>
	);
}

export default WeatherCard;