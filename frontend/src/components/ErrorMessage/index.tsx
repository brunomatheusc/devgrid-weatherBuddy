import React from 'react';

import { Container } from './styles';

const ErrorMessage: React.FC = () => {
  	return (
		<Container>
			<p>Sorry. We couldn't find the specified city.</p>
		</Container>
	);
}

export default ErrorMessage;