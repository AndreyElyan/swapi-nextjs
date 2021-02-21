import { render, screen } from 'test/testUtils';

import { Header } from '.';

describe('Render Header', () => {
  test('Check initials elements', async () => {
    render(<Header></Header>);

    const header = <Header></Header>;

    expect(header).toBeTruthy();
  });
});
