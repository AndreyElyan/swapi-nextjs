import client from '../client';

export function getCharacters() {
  return client.get(`/people/`, {});
}
