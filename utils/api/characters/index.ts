import client from '../client';

export function getCharacters() {
  return client.get(`/people/`, {});
}

export function getCharactersByPage(id) {
  return client.get(`/people/`, {
    params: {
      page: id
    }
  });
}
