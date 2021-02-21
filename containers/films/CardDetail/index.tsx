import { useMachine } from '@xstate/react';

import Loader from 'components/Loader';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { swapiMachine } from 'utils/machines/films';
import { EVENTS } from 'utils/machines/films/enums';
import { MAP_IMAGES } from './enum';

const CardDetail: React.FC = () => {
  const [state, dispatch] = useMachine(swapiMachine);
  const router = useRouter();

  const { movies } = state.context;

  const setFilmDetail = useCallback(
    values => {
      dispatch({
        type: EVENTS.GET_FILMS_DETAIL,
        index: values
      });
      router.push(`films/${values + 1}`);
    },
    [dispatch]
  );

  return (
    <div className="grid grid-flow-col grid-cols-2 grid-rows-3 gap-8 w-full">
      {!movies ? (
        <div className="flex justify-center items-center w-full h-full">
          <Loader size="100px" />
        </div>
      ) : null}
      {movies?.map((result, index) => (
        <div
          onClick={() => setFilmDetail(index)}
          className="
           flex flex-col items-center text-center shadow-xl
           cursor-pointer rounded-lg rounded-br-3xl"
          key={index}
        >
          <img
            className="max-h-80 rounded mt-8 mb-8 "
            src={MAP_IMAGES[result.title]}
            alt={`${result.title} poster`}
          />
          <h1 className="text-gray-600 font-bold mb-4 sm:text-sm text-xs">
            {result.title}
          </h1>
          <button className="mb-4 hover:text-yellow-500 underline">
            See More
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardDetail;
