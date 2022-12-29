import styled from 'styled-components'

const Container = styled.div`
	height: 88px;
	padding: 24px;
	gap: 16px;
`
export default function Social () {
	return (
		<Container>
			<a href='https://github.com/nathahernandez'>
				<img src={'./src/assets/github.svg'} />
			</a>
			<a href='https://www.instagram.com/natha.img/'>
				<img src={'./src/assets/instagram.svg'} />
			</a>
			<a href='https://www.linkedin.com/in/natha-hernandez/'>
				<img src={'./src/assets/linkedin.svg'} />
			</a>
		</Container>
	)
}