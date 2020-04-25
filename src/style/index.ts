import { createGlobalStyle } from 'styled-components';

import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  html,
  body,
  #__next {
    height: 100vh;
  }

  
  body {}
`;

export default GlobalStyles;
