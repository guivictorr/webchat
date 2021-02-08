import styled, { css } from 'styled-components';

interface ChatRoomProps {
  error: string;
}

export const ChatRoomContainer = styled.div<ChatRoomProps>`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.primaryBackground};

  aside {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;

    header {
      height: 70px;
      display: flex;
      align-items: center;
      padding: 20px 40px;
      background-color: ${({ theme }) => theme.colors.secondaryBackground};
      color: ${({ theme }) => theme.colors.primary};
      font-size: 24px;
    }

    main {
      background: ${({ theme }) => theme.colors.contrastBackground};
      padding: 10px 20px;
      color: ${({ theme }) => theme.colors.primary};
      font-size: 18px;
      flex: 1;
    }

    footer {
      height: 70px;
      display: flex;
      align-items: center;
      padding: 15px 40px;
      background-color: ${({ theme }) => theme.colors.secondaryBackground};

      img {
        width: 40px;
        height: 40px;
        border-radius: ${({ theme }) => theme.borderRadius};
      }

      p {
        margin-left: 10px;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    flex: 1;

    header {
      height: 70px;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 20px 40px;
      background-color: ${({ theme }) => theme.colors.contrastBackground};
      color: ${({ theme }) => theme.colors.primary};
      font-size: 24px;
    }

    ul {
      flex: 1;
      margin: 0 auto;
      list-style: none;
      overflow-y: scroll;
      padding: 20px 0;
    }

    ul::-webkit-scrollbar {
      display: none;
    }

    footer {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px 40px;

      form {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 1;
        background-color: ${({ theme }) => theme.colors.inputColor};
        border-radius: ${({ theme }) => theme.borderRadius};
        height: 55px;
        padding: 5px 7px;
        transition: all 0.4s ease;
        ${({ error }) =>
          error
            ? css`
                border: 2px solid tomato;
              `
            : css`
                border: none;
              `}

        input {
          flex: 1;
          height: 100%;
          background-color: transparent;
          border: none;
          font-size: 14px;
          color: ${({ theme }) => theme.colors.secondary};
          margin: 0px 5px;
        }

        button {
          border: none;
          border-radius: ${({ theme }) => theme.borderRadius};
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${({ theme }) => theme.colors.buttonColor};
          padding: 8px;
          cursor: pointer;
        }
      }
    }
  }
`;
