import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: transparent;

  }

  body,html,#root {
    height: 100vh;
    width: 100vw;
    display: flex;
  }

  body {
    font-family: 'Noto Sans', sans-serif;
  }
`;
