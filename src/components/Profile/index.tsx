import { Container, ProfileImg } from './styles'
import profile from '../../assets/profile.png'

export default function Profile () {
	return (
		<Container>
			<ProfileImg src={profile} alt='Foto de Nathã Hernandez, jovem entre 18 a 25 anos de cabelo cacheado e sorrindo' />
			<p>@natha.img</p>
		</Container>
	)
}