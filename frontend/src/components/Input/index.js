import React, { FC, InputHTMLAttributes } from 'react';

import { Container } from './styles';

const Input = ({ children, ...rest }) => {
	return (
		<Container {...rest}>
			{children}
		</Container>
	);
}

export default Input;