import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
import MyThemeProvider from './components/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<MyThemeProvider>
			<Home />
		</MyThemeProvider>
	</React.StrictMode>,
)
