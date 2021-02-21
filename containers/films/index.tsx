import { useMachine } from '@xstate/react';

import { Container } from 'components/Container';
import { swapiMachine } from 'utils/machines/contact';
import { STATES } from 'utils/machines/contact/enums';
import CardDetail from './CardDetail';
import FilmDetail from './FilmDetail';

export default function Films() {
  const [state, dispatch] = useMachine(swapiMachine);

  const {
    movie,
    movies,
    error,
    loading,
    count,
    currentMovieTab,
    nextPageUrl,
    previousPageUrl
  } = state.context;

  console.log(state.value);

  return (
    <Container>
      <Container.Content>
        {state.matches(STATES.GET_FILMS) ? <p>loading...</p> : null}
        {state.matches(STATES.ON_FILMS) ? <CardDetail /> : null}
        {state.matches(STATES.FILM_DETAIL) ? <FilmDetail /> : null}
      </Container.Content>
    </Container>
  );
}
