import React from 'react';

import { Container } from './styles';

export default function Input({ children, ...rest }) {
	return (
		<Container {...rest}>
			{children}
		</Container>
	);
}