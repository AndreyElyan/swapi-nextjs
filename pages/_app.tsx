import '../styles/globals.css';

import { Header } from 'components/Header';
import Head from 'next/head';

function SwapiAPP({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Swapi App - Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="w-full px-0 sm:px-12">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default SwapiAPP;
