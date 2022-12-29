import styled from 'styled-components'
import github from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'

const Container = styled.div`
	height: 88px;
	padding: 24px;
	gap: 16px;
`
export default function Social () {
	return (
		<Container>
			<a href='https://github.com/nathahernandez'>
				<img src={github} />
			</a>
			<a href='https://www.instagram.com/natha.img/'>
				<img src={instagram} />
			</a>
			<a href='https://www.linkedin.com/in/natha-hernandez/'>
				<img src={linkedin} />
			</a>
		</Container>
	)
}