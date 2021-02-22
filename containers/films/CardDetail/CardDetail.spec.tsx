import userEvent from '@testing-library/user-event';
import { films } from 'test/mocks/films';

import { axiosMock, render, screen, waitFor } from 'test/testUtils';

import Films from '.';

describe('Render Films', () => {
  beforeEach(() => {
    const endpointFilms = '/films/';
    axiosMock.onGet(endpointFilms).reply(200, films);
  });
  test('Check initials elements', async () => {
    render(<Films />);

    const title1 = await screen.findByText('A New Hope');
    const title2 = await screen.findByText('The Phantom Menace');
    const title3 = await screen.findByText('The Empire Strikes Back');
    const title4 = await screen.findByText('Attack of the Clones');
    const title5 = await screen.findByText('Return of the Jedi');
    const title6 = await screen.findByText('Revenge of the Sith');
    const seeMore = await screen.findAllByText('See More');
    const fieldName = await screen.findByPlaceholderText('Search a Movie');
    const buttonSubmit = await screen.findByText('Search');

    userEvent.type(fieldName, 'A New Hope');

    await waitFor(() => expect(buttonSubmit).toBeEnabled());

    userEvent.click(buttonSubmit);

    expect(title1).toBeVisible();
    expect(title2).toBeVisible();
    expect(title3).toBeVisible();
    expect(title4).toBeVisible();
    expect(title5).toBeVisible();
    expect(title6).toBeVisible();
    expect(seeMore[0]).toBeVisible();
  });
});
