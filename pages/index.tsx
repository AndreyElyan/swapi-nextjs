import Head from 'next/head';
import classNames from "classnames";
import { Header } from 'components/Header';

export default function Home() {
  const itemsHeaderClassNames = classNames(
    "text-sm sm:text-lg cursor-pointer text-gray-600 hover:text-gray-100",
  );
  return (
    <Header>
      <p className={itemsHeaderClassNames}>FILMS</p>
      <p className={itemsHeaderClassNames}>PEOPLE</p>
      <p className={itemsHeaderClassNames}>SPECIES</p>
      <p className={itemsHeaderClassNames}>STARSHIPS</p>
    </Header>
  );
}
