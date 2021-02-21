import { STATES } from './enums';

export interface CharactersSchema {
  states: {
    [STATES.GET_CHARACTERS]: {};
    [STATES.ON_CHARACTERS]: {};
    [STATES.ERROR]: {};
    [STATES.SUCCESS]: {};
  };
}
