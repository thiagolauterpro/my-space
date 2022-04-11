import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { darkTheme, lightTheme } from '../styles/Themes';
import type { AppProps } from 'next/app';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const themeMode = darkTheme;
  const [locale, setLocale] = useState('en-us')  

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
