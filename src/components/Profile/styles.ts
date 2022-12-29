import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 24px;

	p {
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: ${(prop) => prop.theme.code.colors.textColor}
	}
`
export const ProfileImg = styled.img`
	width: 112px;
	height: 112px;
	border-radius: 50%;
	border: 2px solid #d3d3d3;

`