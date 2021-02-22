import { EVENTS } from './enums';

export type CharactersEvent =
  | {
      type: EVENTS.NEXT_STEP;
      characters?: any;
      nextPageUrl?: any;
      previousPageUrl: any;
    }
  | {
      type: EVENTS.PREVIOUS_STEP;
      characters?: any;
      previousPageUrl: any;
      nextPageUrl?: any;
    }
  | {
      type: EVENTS.GET_CHARACTERS;
      characters?: any;
    }
  | { type: EVENTS.RESTART };
