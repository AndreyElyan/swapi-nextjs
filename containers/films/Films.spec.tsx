import userEvent from '@testing-library/user-event';
import { films } from 'test/mocks/films';

import { axiosMock, render, screen, waitFor } from 'test/testUtils';

import Films from '.';

describe('Render Films', () => {
  beforeEach(() => {
    const endpointFilms = '/film/';
    axiosMock.onGet(endpointFilms).reply(404, films);
  });
  test('Check initials elements', async () => {
    render(<Films />);

    const title1 = await screen.findAllByText('Ops, ocorreu um erro.');
    const buttonSubmit = await screen.findByRole('button', {
      name: /Ok, entendi/i
    });

    await waitFor(() => expect(buttonSubmit).toBeEnabled());

    userEvent.click(buttonSubmit);

    expect(title1[0]).toBeVisible();
  });
});
