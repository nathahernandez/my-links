import { Container } from './styles'

interface ButtonProps {
	link: string
	title: string
}

export default function Button ({ link, title } : ButtonProps) {
	return (
		<Container href={link}>
			{title}
		</Container>
	)
}