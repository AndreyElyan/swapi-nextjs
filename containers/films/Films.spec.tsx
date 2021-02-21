import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from 'test/testUtils';

import Films from '.';

describe('Render Films', () => {
  test('Check initials elements', async () => {
    render(<Films />);

    const text1 = await screen.findAllByText('A New Hope');
    // const title = await screen.findByText(
    //   'Formulário de Atendimento Ouvidoria'
    // );
    // const text2 = await screen.findByText(
    //   'Preencha os dados para seguir com a formalização da sua denúncia.'
    // );
    // const title2 = await screen.findByText('Atenção!');
    // const buttonSubmit = await screen.findByRole('button', {
    //   name: /Continuar/i
    // });

    expect(text1[0]).toBeVisible();
    // expect(title).toBeVisible();
    // expect(text2).toBeVisible();
    // expect(title2).toBeVisible();
    // expect(buttonSubmit).toBeEnabled();
  });
});
