import { useMachine } from '@xstate/react';
import { useCallback, useState } from 'react';
import { swapiMachine } from 'utils/machines/contact';
import { EVENTS } from 'utils/machines/contact/enums';
import { MAP_IMAGES, MAP_URL } from './enum';

const FilmDetail: React.FC = () => {
  const [state, dispatch] = useMachine(swapiMachine);

  const { movies, id } = state.context;

  // const getFilmDetail = useCallback(
  //   values => {
  //     dispatch({
  //       type: EVENTS.GET_FILMS_DETAIL,
  //       id: values
  //     });
  //   },
  //   [dispatch]
  // );

  return <div className=""></div>;
};

export default FilmDetail;
