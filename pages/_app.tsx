import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyle'
import { darkTheme } from '../styles/Themes'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  const themeMode = darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

