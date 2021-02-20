import { STATES } from './enums';

export interface SwapiSchema {
  states: {
    [STATES.ON_FILMS]: {};
    [STATES.GET_FILMS]: {};
    [STATES.FILM_DETAIL]: {};
    [STATES.ERROR]: {};
    [STATES.SUCCESS]: {};
  };
}
