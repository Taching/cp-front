import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Page from '@/components/Page';
import GlobalStyle from '../components/globalstyles';

const theme: DefaultTheme = {
  colors: {
    primary: `#111`,
    secondary: `#0070f3`,
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    </>
  );
}
