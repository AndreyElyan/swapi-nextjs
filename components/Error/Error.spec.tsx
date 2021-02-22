import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from 'test/testUtils';

import Error from '.';

describe('Render Error', () => {
  test('Check initials elements', async () => {
    render(<Error onClick={console.log('oi')}></Error>);

    const container = <Error onClick={console.log('oi')}></Error>;
    const title1 = await screen.findAllByText('Ops, ocorreu um erro.');
    const buttonSubmit = await screen.findByRole('button', {
      name: /Ok, entendi/i
    });

    await waitFor(() => expect(buttonSubmit).toBeEnabled());

    userEvent.click(buttonSubmit);

    expect(title1[0]).toBeVisible();

    expect(container).toBeTruthy();
  });
});
