export enum STATES {
  ON_FILMS = 'ON_FILMS',
  GET_FILMS = 'GET_FILMS',
  FILM_DETAIL = 'FILM_DETAIL',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export enum EVENTS {
  NEXT_STEP = 'NEXT_STEP',
  PREVIOUS_STEP = 'PREVIOUS_STEP',
  GET_FILMS = 'GET_FILMS',
  GET_FILMS_DETAIL = 'GET_FILMS_DETAIL',
  RESTART = 'RESTART'
}

export enum SERVICES {
  GET_MOVIES = 'GET_MOVIES',
  GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL'
}
