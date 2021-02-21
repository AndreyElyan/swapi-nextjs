import { render, screen } from 'test/testUtils';

import { Content } from '.';

describe('Render Content', () => {
  test('Check initials elements', async () => {
    render(<Content></Content>);

    const content = <Content></Content>;

    expect(content).toBeTruthy();
  });
});
