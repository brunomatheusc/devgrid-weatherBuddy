import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 120px;

	height: 100%;
`;

export const Header = styled.div`
	width: 100%;

	> h3 {
		text-align: center;
		text-transform: uppercase;
		margin-bottom: 10px;
	}
`;

export const Wrapper = styled.div`
    display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
	flex: 1;
    height: 100%;
	width: 100%;

	p {
		font-size: 20px;
		font-weight: 500;
	}
`;

export const InputWrapper = styled.div`
	display: flex;
`;