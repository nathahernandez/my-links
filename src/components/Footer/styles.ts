import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 24px;
	p {
		color: ${prop => prop.theme.code.colors.textColor};
		transition: 0s background-color;
		strong {
			transition: color .25s;
		}
		cursor: pointer;
	}
	p:hover {
		strong{
			color: red;
			transition: color .25s;
		}
	}

`