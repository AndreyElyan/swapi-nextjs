import { EVENTS } from './enums';

export type SwapiEvent =
  | {
      type: EVENTS.GET_FILMS;
    }
  | {
      type: EVENTS.NEXT_STEP;
    }
  | {
      type: EVENTS.PREVIOUS_STEP;
    }
  | {
      type: EVENTS.GET_FILMS_DETAIL;
      index?: number;
    }
  | {
      type: EVENTS.SEARCH_MOVIE;
      movies?: any;
    }
  | { type: EVENTS.RESTART };
