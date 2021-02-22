import userEvent from '@testing-library/user-event';
import { films } from 'test/mocks/films';

import { render } from 'test/testUtils';

import CharactersPage from '.';

describe('Render CharactersPage', () => {
  test('Check initials elements', async () => {
    const page = render(<CharactersPage />);

    expect(page).toMatchSnapshot();
  });
});
