import { STATES } from './enums';

export interface CharactersSchema {
  states: {
    [STATES.GET_CHARACTERS]: {};
    [STATES.ON_CHARACTERS]: {};
    [STATES.CHANGE_STEP]: {};
    [STATES.ERROR]: {};
    [STATES.SUCCESS]: {};
  };
}
