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

		</Container>
	);
}

export default WeatherCard;