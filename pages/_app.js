import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>React21</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
