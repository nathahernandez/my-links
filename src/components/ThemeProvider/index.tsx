import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../styles/global-styles'
import { theme } from '../../styles/theme'

interface MyThemeProviderProps {
	children: ReactNode
}

export default function MyThemeProvider ({ children }  : MyThemeProviderProps) {
	return (
		<ThemeProvider theme={theme}>
			{children}
			<GlobalStyles />
		</ThemeProvider>

	)
}