import { render, screen } from 'test/testUtils';

import Button from '.';

describe('Render Button', () => {
  test('Check initials elements', async () => {
    render(
      <Button onClick={console.log('oi')}>Que a força esteja com você.</Button>
    );

    const button = await screen.findByRole('button', {
      name: /Que a força esteja com você./i
    });

    expect(button).toBeEnabled();
    expect(button).toHaveClass('bg-gray-900');
    expect(button).toHaveTextContent(/Que a força esteja com você/i);
  });
});
