import styled, { css } from 'styled-components';

interface ChatRoomProps {
  error: string;
}

export const ChatRoomContainer = styled.main<ChatRoomProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    width: 100%;

    h1 {
      display: flex;
      align-items: center;
    }

    svg {
      margin-right: 5px;
    }
  }

  ul {
    overflow-y: scroll;
    list-style: none;
    width: 100%;
    flex: 1;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 10px 0;

    input {
      height: 50px;
      border: none;
      padding: 8px;
      border-radius: 8px;
      background-color: #fad02c;
      width: 70%;
      font-size: 18px;
      color: #333652;
      ${({ error }) =>
        error
          ? css`
              border: 2px solid tomato;
            `
          : css`
              border: none;
            `}

      &::placeholder {
        font-size: 20px;
        color: #333652;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 50%;
      padding: 8px;
      background-color: #333652;
      cursor: pointer;
      margin-left: 10px;
      transition: all 0.2s ease;
      overflow: hidden;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
