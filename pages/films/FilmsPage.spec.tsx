import userEvent from '@testing-library/user-event';
import { films } from 'test/mocks/films';

import { axiosMock, render, screen, waitFor } from 'test/testUtils';

import FilmsPage from '.';

describe('Render FilmsPage', () => {
  test('Check initials elements', async () => {
    const page = render(<FilmsPage />);

    expect(page).toMatchSnapshot();
  });
});
