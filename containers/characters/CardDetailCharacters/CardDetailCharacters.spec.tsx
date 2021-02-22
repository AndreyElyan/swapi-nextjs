import userEvent from '@testing-library/user-event';
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

    const btnPrevious = await screen.findByRole('button', {
      name: /previous/i
    });

    const btnNext = await screen.findByRole('button', {
      name: /next/i
    });

    await waitFor(() => expect(btnPrevious).toBeEnabled());
    await waitFor(() => expect(btnNext).toBeEnabled());

    userEvent.click(btnPrevious);
    userEvent.click(btnNext);
  });
});
