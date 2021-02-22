import { CharactersContext } from './context';

export const initialContext: CharactersContext = {
  characters: [],
  previousPageUrl: '',
  nextPageUrl: '',
  loading: false,
  error: false,
  count: 0
};
