import { useMachine } from '@xstate/react';

import { Container } from 'components/Container';
import Loader from 'components/Loader';
import { swapiMachine } from 'utils/machines/films';
import { STATES } from 'utils/machines/films/enums';
import CardDetail from './CardDetail';

export default function Films() {
  const [state, dispatch] = useMachine(swapiMachine);

  return (
    <Container>
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
