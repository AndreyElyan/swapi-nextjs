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
      // category?: string;
      // taxId?: string;
      // description?: string;
      // email?: string;
      // name?: string;
      // product?: string;
      // protocol?: string;
      // phone?: string;
      // currentStep?: number;
    }
  | { type: EVENTS.RESTART };
