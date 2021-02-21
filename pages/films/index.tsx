import Head from 'next/head';

import classNames from 'classnames';
import { Header } from 'components/Header';

import Films from 'containers/films';

export default function FilmsPage() {
  return (
    <>
      <Films />
    </>
  );
}
