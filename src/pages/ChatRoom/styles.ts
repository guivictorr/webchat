import styled, { css } from 'styled-components';

interface ChatRoomProps {
  error: string;
}

export const ChatRoomContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
`;

export const SideBar = styled.aside`
  height: 100%;
  width: 360px;
  display: flex;
  flex-direction: column;

  header {
    height: 70px;
    display: flex;
    align-items: center;
    padding: 20px 40px;
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.4rem;
  }

  main {
    flex: 1;
    font-size: 1.8rem;
    padding: 10px 20px;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.contrastBackground};

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.buttonColor};
      margin: 0 5px;
    }
  }

  footer {
    height: 70px;
    display: flex;
    align-items: center;
    padding: 15px 0 15px 20px;
    background-color: ${({ theme }) => theme.colors.secondaryBackground};

    figure {
      width: 40px;
      height: 40px;
      border-radius: ${({ theme }) => theme.borderRadius};
      background-color: ${({ theme }) => theme.colors.buttonColor};
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    p {
      margin-left: 10px;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 910px) {
    display: none;
  }
`;

export const ChatRoom = styled.main<ChatRoomProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  nav {
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    background-color: ${({ theme }) => theme.colors.contrastBackground};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.4rem;
  }

  ul {
    width: 100%;
    height: 100%;
    list-style: none;
    overflow-y: scroll;
    padding: 10px 40px;

    @media (max-width: 400px) {
      padding: 10px;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  footer {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 40px;

    form {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.inputColor};
      border-radius: ${({ theme }) => theme.borderRadius};
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
        font-size: 1.4rem;
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
`;
