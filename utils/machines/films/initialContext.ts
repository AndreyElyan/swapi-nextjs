import { SwapiContext } from './context';

export const initialContext: SwapiContext = {
  movies: [],
  titleImages: [],
  movie: {},
  currentMovieTab: '',
  previousPageUrl: '',
  nextPageUrl: '',
  loading: false,
  error: false,
  count: 0,
  index: 0
};
