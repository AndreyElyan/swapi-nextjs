import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  className,
  children,
  ...props
}) => {
  const headerClassnames = classNames(
    'flex items-center bg-yellow-500 justify-center relative h-28 w-full shadow-md',
    className
  );

  const itemsHeaderClassNames = classNames(
    'text-sm sm:text-lg cursor-pointer hover:text-gray-600'
  );

  const [moviesTabActive, setMoviesTabActive] = useState(false);
  const [charactersTabActive, setCharactersTabActive] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/films') {
      setMoviesTabActive(true);
      setCharactersTabActive(false);
    } else if (router.pathname === '/characters') {
      setMoviesTabActive(false);
      setCharactersTabActive(true);
    } else if (router.pathname === '/spaceships') {
      setMoviesTabActive(false);
      setCharactersTabActive(false);
    }
  }, [router]);

  return (
    <header className={headerClassnames} {...props}>
      <div className="flex flex-row justify-around w-full">
        <img
          className=" max-h-10 sm:max-h-12"
          src="https://logosmarcas.net/wp-content/uploads/2020/11/Star-Wars-Logo.png"
          alt="logo"
        ></img>
        <Link href="/films">
          <p
            className={`${itemsHeaderClassNames} ${
              moviesTabActive
                ? 'font-bold text-gray-800 border-b-4'
                : 'text-white'
            }`}
          >
            Movies
          </p>
        </Link>
        <Link href="/characters">
          <p
            className={`${itemsHeaderClassNames} ${
              charactersTabActive
                ? 'font-bold text-gray-800 border-b-4'
                : 'text-white'
            }`}
          >
            Characters
          </p>
        </Link>
      </div>
    </header>
  );
};
