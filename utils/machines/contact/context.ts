export interface SwapiContext {
  movies: any;
  movie: Object;
  currentMovieTab: string;
  previousPageUrl: string;
  nextPageUrl: string;
  loading: boolean;
  error: boolean;
  count: number;
}
