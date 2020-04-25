import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';

import { checkA11y } from '@storybook/addon-a11y';

import { ThemeProvider } from 'styled-components';

import theme from 'theme';

const customViewports = {
  extraSmall: {
    name: 'Extra small breakpoint',
    styles: {
      width: '475px',
      height: '100%'
    }
  },
  small: {
    name: 'Small breakpoint',
    styles: {
      width: '699px',
      height: '100%'
    }
  },
  medium: {
    name: 'Medium breakpoint',
    styles: {
      width: '1023px',
      height: '100%'
    }
  },
  large: {
    name: 'Large breakpoint',
    styles: {
      width: '1080px',
      height: '100%'
    }
  },
  extraLarge: {
    name: 'Extra Large breakpoint',
    styles: {
      width: '100%',
      height: '100%'
    }
  }
};

addParameters({
  viewport: { viewports: customViewports }
});

addDecorator(checkA11y);

const StorybookStyle = createGlobalStyle`
  body {
    padding: 16px;
  }

  body.sb-show-main {
    padding: 0;
  }
`;

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <>
      <StorybookStyle />
      {story()}
    </>
  </ThemeProvider>
));
