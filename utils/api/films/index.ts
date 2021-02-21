import client from '../client';
// import { GetFilmsResponse } from './interfaces/getFilmsResponse';

export function getFilms() {
  return client.get(`/films/`, {});
}

export function getFilmById(id) {
  return client.get(`/films/${id}`, {});
}
