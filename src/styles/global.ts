import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: transparent;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.6rem;
    background-color: #0B090C;
  }

  #root {
    height: 100vh;
    width: 100vw;
  }
`;
