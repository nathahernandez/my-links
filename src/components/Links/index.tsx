import Button from '../Button'
import { Container } from './styles'

export default function Links () {
	return (
		<Container>
			<Button link='https://github.com/nathahernandez/nathahernandez' title='Sobre mim' />
			<Button link='https://drive.google.com/file/d/1d4IOCKw-wcdDUTjkvvS8uM9VEPnNXqyw/view' title='Meu Portifólio' />
			<Button link='https://github.com/nathahernandez/waiter-app-api' title='Último projeto' />
		</Container>
	)
}