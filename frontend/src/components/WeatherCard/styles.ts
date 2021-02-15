import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 120px;
    width: 120px;
    padding: 10px;
	
	background: #fff;
	border: 1px solid #f1f1f1;
	border-radius: 5px;

	p {
		font-size: 12px;
		font-weight: 500;
	}
`;
