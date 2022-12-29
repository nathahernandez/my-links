import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Inter', sans-serif;
	}
	body {
		background: url(${prop => prop.theme.code.bg}) no-repeat top center/cover;
		backdrop-filter: blur(5px);
	}

`