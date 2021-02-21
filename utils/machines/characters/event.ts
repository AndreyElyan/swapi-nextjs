import { EVENTS } from './enums';

export type CharactersEvent =
  | {
      type: EVENTS.NEXT_STEP;
    }
  | {
      type: EVENTS.PREVIOUS_STEP;
    }
  | {
      type: EVENTS.GET_CHARACTERS;
      characters?: any;
    }
  | { type: EVENTS.RESTART };
