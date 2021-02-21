import { useMachine } from '@xstate/react';
import { useCallback, useState } from 'react';
import { swapiMachine } from 'utils/machines/contact';
import { EVENTS } from 'utils/machines/contact/enums';

const FilmDetail: React.FC = () => {
  const [state, dispatch] = useMachine(swapiMachine);

  const { movies, index } = state.context;

  // const getFilmDetail = useCallback(
  //   values => {
  //     dispatch({
  //       type: EVENTS.GET_FILMS_DETAIL,
  //       id: values
  //     });
  //   },
  //   [dispatch]
  // );

  return <div className="">asiuhdfuiahsdfuighasduiyfgyu8iasg</div>;
};

export default FilmDetail;
