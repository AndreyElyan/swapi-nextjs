import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import classNames from 'classnames';
import { Header } from 'components/Header';
import Head from 'next/head';
import Link from 'next/link';

function SwapiAPP({ Component, pageProps }) {
  const itemsHeaderClassNames = classNames(
    'text-sm sm:text-lg cursor-pointer text-white hover:text-gray-600'
  );
  return (
    <>
      <Head>
        <title>Swapi App - Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <Link href="/films">
          <p className={itemsHeaderClassNames}>Movies</p>
        </Link>
        <Link href="/characters">
          <p className={itemsHeaderClassNames}>Characters</p>
        </Link>
        <Link href="/spaceships">
          <p className={itemsHeaderClassNames}>Spaceships</p>
        </Link>
        <Link href="/species">
          <p className={itemsHeaderClassNames}>Species</p>
        </Link>
      </Header>
      <div className="w-full px-0 sm:px-12">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default SwapiAPP;
