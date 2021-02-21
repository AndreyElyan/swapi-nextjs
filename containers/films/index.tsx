import { useMachine } from '@xstate/react';
import Button from 'components/Button';

import { Container } from 'components/Container';
import Error from 'components/Error';
import Loader from 'components/Loader';
import { useCallback } from 'react';
import { swapiMachine } from 'utils/machines/films';
import { EVENTS, STATES } from 'utils/machines/films/enums';
import CardDetail from './CardDetail';

export default function Films() {
  const [state, dispatch] = useMachine(swapiMachine);

  const { error } = state.context;

  const Feedback = useCallback(() => {
    return error ? (
      <Error onClick={() => dispatch({ type: EVENTS.RESTART })} />
    ) : null;
  }, [error, dispatch]);

  return (
    <div className="flex flex-col px-8">
      <div className="flex w-full justify-center">
        <Feedback />
      </div>
      <div>
        {state.matches(STATES.GET_FILMS) ? (
          <div className="flex justify-center items-center w-full h-full">
            <Loader size="100px" />
          </div>
        ) : null}
        {state.matches(STATES.ON_FILMS) ? <CardDetail /> : null}
      </div>
    </div>
  );
}
