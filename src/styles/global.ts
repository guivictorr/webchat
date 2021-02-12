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

    @media (max-width: 435px) {
      font-size: 50%;
    }
  }

  body {
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.6rem;
  }

  #root {
    height: 100vh;
    width: 100vw;
  }
`;
