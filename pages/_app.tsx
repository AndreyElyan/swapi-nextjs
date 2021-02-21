import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import classNames from 'classnames';
import { Header } from 'components/Header';
import Head from 'next/head';

function SwapiAPP({ Component, pageProps }) {
  const itemsHeaderClassNames = classNames(
    'text-sm sm:text-lg cursor-pointer text-gray-600 hover:text-gray-100'
  );
  return (
    <>
      <Head>
        <title>Swapi App - Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <p className={itemsHeaderClassNames}>FILMS</p>
        <p className={itemsHeaderClassNames}>CHARECTERS</p>
        <p className={itemsHeaderClassNames}>SPECIES</p>
        <p className={itemsHeaderClassNames}>STARSHIPS</p>
      </Header>
      <Component {...pageProps} />
    </>
  );
}

export default SwapiAPP;
