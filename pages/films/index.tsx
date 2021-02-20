import { useCallback } from 'react';
import Head from 'next/head';
import { useMachine } from '@xstate/react';

import classNames from 'classnames';
import { Header } from 'components/Header';
import { Container } from 'components/Container';
import { swapiMachine } from 'utils/machines/contact';
import { EVENTS, STATES } from 'utils/machines/contact/enums';
import Films from 'containers/films';

export default function FilmsPage() {
  const itemsHeaderClassNames = classNames(
    'text-sm sm:text-lg cursor-pointer text-gray-600 hover:text-gray-100'
  );
  return (
    <>
      <Head>
        <title>Swapi App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <p className={itemsHeaderClassNames}>FILMS</p>
        <p className={itemsHeaderClassNames}>PEOPLE</p>
        <p className={itemsHeaderClassNames}>SPECIES</p>
        <p className={itemsHeaderClassNames}>STARSHIPS</p>
      </Header>
      <Films />
    </>
  );
}
