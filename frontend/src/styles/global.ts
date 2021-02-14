import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background: #f1f3f6;
		font-family: 'Quicksand', sans-serif;
	}

	html, body, #root {
		height: 100%;
	}

	input:focus, textarea:focus, select:focus, button:focus {
        outline: none;
    }

	a {
		text-decoration: none;
	}

	a, button {
		cursor: pointer;
	}

	ul {
		list-style-type: none;
	}
`;