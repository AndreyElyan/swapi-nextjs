import { characters } from 'test/mocks/characters';

import { axiosMock, render, screen, waitFor } from 'test/testUtils';

import Characters from '.';

describe('Render Characters', () => {
  beforeEach(() => {
    const endpointCharacters = '/characters/';
    axiosMock.onGet(endpointCharacters).reply(200, characters);
  });
  test('Check initials elements', async () => {
    render(<Characters />);

    const title1 = await screen.findByText('Name:');

    expect(title1).toBeVisible();
  });
});
