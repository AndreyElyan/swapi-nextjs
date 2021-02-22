import userEvent from '@testing-library/user-event';
import { characters } from 'test/mocks/characters';

import { axiosMock, render, screen, waitFor } from 'test/testUtils';

import Characters from '.';

describe('Render Characters', () => {
  beforeEach(() => {
    const endpointCharacters = '/film/';
    axiosMock.onGet(endpointCharacters).reply(404, characters);
  });
  test('Check initials elements', async () => {
    render(<Characters />);

    const title1 = await screen.findAllByText('Ops, ocorreu um erro.');
    const buttonSubmit = await screen.findByRole('button', {
      name: /Ok, entendi/i
    });

    await waitFor(() => expect(buttonSubmit).toBeEnabled());

    userEvent.click(buttonSubmit);

    expect(title1[0]).toBeVisible();
  });
});
