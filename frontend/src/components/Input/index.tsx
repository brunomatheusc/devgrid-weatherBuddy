import React, { FC, InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<IProps> = ({ children, ...rest }) => {
	return (
		<Container>
			{children}
		</Container>
	);
}

export default Input;