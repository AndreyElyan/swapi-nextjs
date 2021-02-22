import { useCallback, useState } from 'react';

import { useMachine } from '@xstate/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MAP_IMAGES } from 'containers/films/CardDetail/enum';

import { intToRoman } from 'utils/helpers/intToRoman';
import { transformDate } from 'utils/helpers/transformDate';
import { swapiMachine } from 'utils/machines/films';
import Loader from 'components/Loader';

const FilmDetail: React.FC = () => {
  const [state, dispatch] = useMachine(swapiMachine);
  const { movies: moviesData } = state.context;

  const router = useRouter();

  const id = Number(router.query.id);
  const indexValue = id - 1;

  const movie = moviesData[indexValue];

  const cardClassNames =
    'flex flex-col items-center text-center shadow-xl rounded-lg rounded-sm';

  return (
    <>
      <Link href="/films">
        <p className="mt-8 hover:text-yellow-600 cursor-pointer text-lg">
          {'< Back'}
        </p>
      </Link>

      <section className="flex flex-1 flex-col justify-between w-full lg:flex-row">
        {!movie ? (
          <div className="flex justify-center items-center w-full h-full">
            <Loader size="100px" />
          </div>
        ) : (
          <div className="flex flex-col w-full justify-center items-center">
            <div className="flex flex-col items-center box shadow-lg px-4 sm:px-14">
              <img
                className="rounded mt-8 mb-8 max-w-sm"
                src={MAP_IMAGES[movie?.title]}
                alt={`${movie?.title} poster`}
              />
              <h1 className="text-xl font-bold">{movie.title}</h1>
              <div className="text-center max-w-lg">
                <h1 className="font-bold mb-4 mt-8 text-gray-600">
                  Description:
                </h1>
                <p className="text-md mb-4 font-semibold">
                  {movie.opening_crawl}
                </p>
              </div>
            </div>

            <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-8 w-full my-12">
              <div className={cardClassNames}>
                <h1 className="font-bold mb-4 text-gray-600">Release Date:</h1>
                <p className="text-md mb-4 font-semibold">
                  {transformDate(movie.release_date)}
                </p>
              </div>

              <div className={cardClassNames}>
                <h1 className="font-bold mb-4 text-gray-600">Producer:</h1>
                <p className="text-md mb-4 font-semibold">{movie.producer}</p>
              </div>

              <div className={cardClassNames}>
                <h1 className="font-bold mb-4 text-gray-600">Director:</h1>
                <p className="text-md mb-4 font-semibold">{movie.director}</p>
              </div>

              <div className={cardClassNames}>
                <h1 className="font-bold mb-4 text-gray-600">Episode:</h1>
                <p className="text-md mb-4 font-semibold">
                  {intToRoman(Number(movie.episode_id))}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default FilmDetail;
