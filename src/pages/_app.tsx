import { AppProps } from 'next/app';
import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />;
    </>
  );
}
export default MyApp;
