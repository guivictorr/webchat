import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,html,#root {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Nunito, sans-serif;
    background-color: #E9EAEC;
    color: #333652;
  }
`;
