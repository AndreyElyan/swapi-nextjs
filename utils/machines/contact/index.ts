import { Machine, assign } from 'xstate';

import { STATES, EVENTS, SERVICES } from './enums';

import { SwapiContext } from './context';
import { SwapiSchema } from './schema';

import { initialContext } from './initialContext';

import { SwapiEvent } from './event';
import { getFilms } from 'utils/api/films';

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
              error: (_context, { data }) => {
                return data?.response?.data?.message ?? 'Ops,ocorreu um erro';
              },
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
              loading: _context => true
            })
          }
        }
      },

      [STATES.FILM_DETAIL]: {
        invoke: {
          src: SERVICES.GET_MOVIE_DETAIL,
          onDone: {
            target: STATES.FILM_DETAIL,
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
              error: (_context, { data }) => {
                return data?.response?.data?.message ?? 'Ops,ocorreu um erro';
              },
              loading: _context => false
            })
          }
        },
        on: {
          [EVENTS.PREVIOUS_STEP]: {
            target: STATES.ON_FILMS,
            actions: assign({
              loading: _context => true
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
      }
    }
  }
);
