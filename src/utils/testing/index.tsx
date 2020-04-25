import React, { FunctionComponent } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import theme from 'theme';
import GlobalStyles from 'style';

const AllTheProviders: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
