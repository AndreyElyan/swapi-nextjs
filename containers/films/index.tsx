import { useMachine } from '@xstate/react';
import Button from 'components/Button';

import { Container } from 'components/Container';
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
      <div className="flex flex-col items-center  justify-center shadow-md py-16 px-16">
        <p className="text-xl font-bold mb-8">Ops, ocorreu um erro.</p>
        <Button onClick={() => dispatch({ type: EVENTS.RESTART })}>
          Ok, entendi
        </Button>
      </div>
    ) : null;
  }, [error, dispatch]);

  return (
    <Container>
      <div className="flex w-full justify-center">
        <Feedback />
      </div>
      <Container.Content>
        {state.matches(STATES.GET_FILMS) ? (
          <div className="flex justify-center items-center w-full h-full">
            <Loader size="100px" />
          </div>
        ) : null}
        {state.matches(STATES.ON_FILMS) ? <CardDetail /> : null}
      </Container.Content>
    </Container>
  );
}
