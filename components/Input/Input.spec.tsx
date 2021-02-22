import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from 'test/testUtils';

import Input from './Input';

describe('Render Input', () => {
  test('Check initials elements', async () => {
    render(
      <Input label="search" onChange={alert('oi')} value="Harry Potter"></Input>
    );

    const container = (
      <Input label="search" onChange={alert('oi')} value="Harry Potter"></Input>
    );

    const placeholder = screen.findAllByPlaceholderText('search');

    expect(placeholder).toBeTruthy();
    expect(container).toBeTruthy();
  });
});
