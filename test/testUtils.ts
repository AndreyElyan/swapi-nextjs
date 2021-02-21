import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'utils/api/client';

const Providers = ({ children }) => {
  return children;
};

const axiosMock = new MockAdapter(axios);

beforeEach(() => axiosMock.reset());

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };

export { axiosMock };
