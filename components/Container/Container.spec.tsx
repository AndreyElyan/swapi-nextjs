import { render, screen } from 'test/testUtils';

import { Container } from '.';

describe('Render Container', () => {
  test('Check initials elements', async () => {
    render(<Container></Container>);

    const container = <Container></Container>;

    expect(container).toBeTruthy();
  });
});
