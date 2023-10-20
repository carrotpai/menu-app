import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    main: '#072659',
    secondary: '#657A9D',
  },
  shadow: {
    main: '0px 4px 4px 0px #00000040',
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, system-ui, Avenir, Helvetica, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color: #072659;
  }

`;
