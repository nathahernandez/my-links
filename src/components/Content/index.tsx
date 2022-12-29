import Links from '../Links'
import Profile from '../Profile'
import Social from '../Social'
import Footer from '../Footer'
import { Container, ContentBox } from './styles'


export default function Content () {
	return (
		<Container>
			<ContentBox>
				<Profile />
			</ContentBox>
			<ContentBox>
				<Links />
			</ContentBox>
			<ContentBox>
				<Social />
			</ContentBox>
			<ContentBox>
				<Footer />
			</ContentBox>
		</Container>
	)
}