import { createGlobalStyle } from 'styled-components';
import { ChatRoomContainer } from '../pages/ChatRoom/styles';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: transparent;

  }

  body,html,#root {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  body {
    font-family: Nunito, sans-serif;
    background-color: #E9EAEC;
    color: #333652;
  }

  @media (max-width: 850px) {
    main${ChatRoomContainer} {
      width: 100%;
    }
  }
`;
