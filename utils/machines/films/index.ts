import { Machine, assign } from 'xstate';

import { STATES, EVENTS, SERVICES } from './enums';

import { SwapiContext } from './context';
import { SwapiSchema } from './schema';

import { initialContext } from './initialContext';

import { SwapiEvent } from './event';
import { getFilmById, getFilms, searchFilm } from 'utils/api/films';

export const swapiMachine = Machine<SwapiContext, SwapiSchema, SwapiEvent>(
  {
    id: 'swapiMachine',
    initial: STATES.GET_FILMS,
    context: initialContext,
    states: {
      [STATES.GET_FILMS]: {
        invoke: {
          src: SERVICES.GET_MOVIES,
          onDone: {
            target: STATES.ON_FILMS,
            actions: assign({
              loading: _context => false,
              count: (_context, { data }) => data.count,
              movies: (_context, { data }) => data.results,
              previousPageUrl: (_context, { data }) => data.previous,
              nextPageUrl: (_context, { data }) => data.next
            })
          },
          onError: {
            target: STATES.ERROR,
            actions: assign({
              error: _context => true,
              loading: _context => false
            })
          }
        }
      },

      [STATES.ON_FILMS]: {
        on: {
          [EVENTS.GET_FILMS_DETAIL]: {
            target: STATES.FILM_DETAIL,
            actions: assign({
              loading: _context => true,
              index: (_context_, { index }) => index
            })
          },

          [EVENTS.SEARCH_MOVIE]: {
            target: STATES.ON_FILMS,
            actions: assign({
              loading: _context => true,
              movies: (_context_, { movies }) => movies
            })
          }
        }
      },

      [STATES.FILM_DETAIL]: {
        on: {
          [EVENTS.GET_FILMS_DETAIL]: {
            actions: assign({
              loading: _context => true,
              index: (_context_, { index }) => index
            })
          }
        }
      },

      [STATES.ERROR]: {
        on: {
          [EVENTS.RESTART]: {
            target: STATES.GET_FILMS,
            actions: assign({
              error: _context => false
            })
          }
        }
      },

      [STATES.SUCCESS]: {
        type: 'final'
      }
    }
  },
  {
    services: {
      [SERVICES.GET_MOVIES]: async _event => {
        const { data } = await getFilms();

        return data;
      },
      [SERVICES.GET_MOVIE_DETAIL]: async ({ index }, _event) => {
        const { data } = await getFilmById(index);

        return data;
      }
    }
  }
);
