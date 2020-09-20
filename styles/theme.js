import { css } from '@emotion/core'
import emotionReset from 'emotion-reset'

export const theme = {
  colors: {
    purple: '#7957d5',
    purpleInvert: '#fff',
    purpleDark: '#6943d0',
    link: '#3273dc',
  },
  typography: {
    titleColor: '#363636',
    subtitleColor: '#7a7a7a',
    titleSize: '2rem',
    subtitleSize: '1.75rem',
  },
}

export const globalCss = (theme) => css`
  ${emotionReset};

  html,
  body {
    line-height: 1.2;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  h1 {
    color: ${theme.typography.titleColor};
    font-size: ${theme.typography.titleSize};
    padding: 0.5rem;
  }

  h2 {
    color: ${theme.typography.subtitleColor};
    font-size: ${theme.typography.subtitleSize};
    padding: 0.5rem;
  }

  p {
    padding: 0.5rem;
  }

  code {
    font-family: monospace;
  }

  pre {
    padding: 0.5rem;
  }

  ol {
    list-style-type: decimal;
  }

  ul {
    list-style-type: circle;
  }

  ol,
  ul {
    padding-left: 2.5rem;
  }
`
