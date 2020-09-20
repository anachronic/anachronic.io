import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { theme, globalCss } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalCss} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
