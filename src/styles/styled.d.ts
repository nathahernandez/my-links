import 'styled-components'
import { ThemePattern } from '../utils/interfaces'

declare module 'styled-components' {
	export interface DefaultTheme {
		code: ThemePattern
	}
}