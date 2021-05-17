import { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress'; // nprogress module
import 'nprogress/nprogress.css'; // styles of nprogress
import GlobalStyles from '../styles/global';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />;
    </>
  );
}
export default MyApp;
