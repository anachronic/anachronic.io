import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { theme } from '../styles/theme'
import { css } from '@emotion/core'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
        `}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
