import Head from 'next/head';

import classNames from 'classnames';
import { Header } from 'components/Header';

import Characters from 'containers/characters';

export default function Page() {
  return (
    <>
      <Characters />
    </>
  );
}
