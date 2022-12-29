import styled from 'styled-components'

export const Container = styled.a`
	width: 256px;
	padding: 16px 24px;
	border-radius: 8px;

	display: flex;
	justify-content: center;
	align-items: center;

	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	text-decoration: none;

	background: ${prop => prop.theme.code.colors.bg};
	color: ${prop => prop.theme.code.colors.textColor};
	&:hover{
		background: ${prop => prop.theme.code.colors.bgHover};
		transition: background .25s;
	}
`