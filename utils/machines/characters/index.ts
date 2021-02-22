import { Machine, assign } from 'xstate';

import { STATES, EVENTS, SERVICES } from './enums';

import { CharactersContext } from './context';
import { CharactersSchema } from './schema';

import { initialContext } from './initialContext';

import { CharactersEvent } from './event';
import { getFilmById, getFilms, searchFilm } from 'utils/api/films';
import { getCharacters, getCharactersByPage } from 'utils/api/characters';

export const charactersMachine = Machine<
  CharactersContext,
  CharactersSchema,
  CharactersEvent
>(
  {
    id: 'charactersMachine',
    initial: STATES.GET_CHARACTERS,
    context: initialContext,
    states: {
      [STATES.GET_CHARACTERS]: {
        invoke: {
          src: SERVICES.GET_CHARACTERS,
          onDone: {
            target: STATES.ON_CHARACTERS,
            actions: assign({
              loading: _context => false,
              count: (_context, { data }) => data.count,
              characters: (_context, { data }) => data.results,
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

      [STATES.ON_CHARACTERS]: {
        on: {
          [EVENTS.NEXT_STEP]: {
            actions: assign({
              characters: (_context, { characters }) => characters,
              previousPageUrl: (_context, { previousPageUrl }) =>
                previousPageUrl,
              nextPageUrl: (_context, { nextPageUrl }) => nextPageUrl,
              loading: _context => true
            })
          },
          [EVENTS.PREVIOUS_STEP]: {
            actions: assign({
              loading: _context => true,
              characters: (_context, { characters }) => characters,
              nextPageUrl: (_context, { nextPageUrl }) => nextPageUrl,
              previousPageUrl: (_context, { previousPageUrl }) =>
                previousPageUrl
            })
          }
        }
      },

      [STATES.CHANGE_STEP]: {
        invoke: {
          src: SERVICES.GET_CHARACTERS,
          onDone: {
            target: STATES.ON_CHARACTERS,
            actions: assign({
              loading: _context => false,
              count: (_context, { data }) => data.count,
              characters: (_context, { data }) => data.results,
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

      [STATES.ERROR]: {
        on: {
          [EVENTS.RESTART]: {
            target: STATES.GET_CHARACTERS,
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
      [SERVICES.GET_CHARACTERS]: async _event => {
        const { data } = await getCharacters();

        return data;
      }
    }
  }
);
