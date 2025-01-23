import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';
export { customRender as render }; 