import { render, screen } from 'test/testUtils';

import Loader from '.';

describe('Render Loader', () => {
  test('Check initials elements', async () => {
    render(<Loader size="100px"></Loader>);

    const loader = <Loader></Loader>;

    expect(loader).toBeTruthy();
  });
});
