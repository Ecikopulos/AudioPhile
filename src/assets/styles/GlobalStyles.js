import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  


  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Manrope', sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  a, button {
    font-family: 'Manrope', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
