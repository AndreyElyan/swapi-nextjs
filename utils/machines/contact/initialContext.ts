import { SwapiContext } from './context';

export const initialContext: SwapiContext = {
  movies: [],
  movie: {},
  currentMovieTab: '',
  previousPageUrl: '',
  nextPageUrl: '',
  loading: false,
  error: false,
  count: 0
};
