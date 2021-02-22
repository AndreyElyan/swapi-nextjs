import { useMachine } from '@xstate/react';
import Button from 'components/Button';
import Input from 'components/Input/Input';

import Loader from 'components/Loader';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { getFilms, searchFilm } from 'utils/api/films';
import { swapiMachine } from 'utils/machines/films';
import { EVENTS } from 'utils/machines/films/enums';
import { MAP_IMAGES } from './enum';

const CardDetail: React.FC = () => {
  const [state, dispatch] = useMachine(swapiMachine);
  const [searchValue, setSearchValue] = useState('');
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

  const searchMovie = async () => {
    try {
      if (searchValue) {
        const { data } = await searchFilm(searchValue);
        dispatch({
          type: EVENTS.SEARCH_MOVIE,
          movies: data.results
        });
        setSearchValue('');
      } else {
        const { data } = await getFilms();
        dispatch({
          type: EVENTS.SEARCH_MOVIE,
          movies: data.results
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-col my-12">
        <Input
          label="Search a Movie"
          onChange={e => setSearchValue(e.target.value)}
          value={searchValue}
        />

        <Button className="mt-4" onClick={searchMovie}>
          Search
        </Button>
      </div>

      <div className="grid grid-flow-col grid-cols-2 grid-rows-3 my-8 gap-8 w-full">
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
    </>
  );
};

export default CardDetail;
