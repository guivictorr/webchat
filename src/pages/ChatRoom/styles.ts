import styled, { css } from 'styled-components';

export const ChatRoomContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 36rem 1fr;
  grid-template-rows: 7rem 1fr 7rem;
  gap: 0px 0px;
  grid-template-areas:
    'sidebar chatTop'
    'sidebar chat'
    'sidebar chatInput';

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'chatTop'
      'chat'
      'chatInput';
  }
`;

export const SideBar = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const Title = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryBackground};
    color: ${theme.colors.primary};
  `}

  display: flex;
  align-items: center;
  padding: 2rem 4rem;
  font-size: 2.4rem;
  height: 7rem;
`;

export const SideBarContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.contrastBackground};
    color: ${theme.colors.primary};

    a {
      text-decoration: none;
      color: ${theme.colors.buttonColor};
      margin: 0 5px;
    }
  `}

  padding: 0.8rem 1.25rem;
  font-size: 1.8rem;
  flex: 1;
`;

export const Profile = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryBackground};
    color: ${theme.colors.primary};

    figure {
      width: 40px;
      height: 40px;
      border-radius: ${theme.borderRadius.rounded};
      background-color: ${theme.colors.buttonColor};
      overflow: hidden;
      margin-right: 0.8rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  `}

  display: flex;
  align-items: center;
  padding: 1rem 0 1rem 2.5rem;
  height: 7rem;
`;

export const TopChat = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.contrastBackground};
    color: ${theme.colors.primary};
  `}

  font-size: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2.4rem;
  grid-area: chatTop;
`;

export const Chat = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryBackground};
  `}
  grid-area: chat;
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
  padding: 1rem 4rem;

  @media (max-width: 468px) {
    padding: 1rem;
  }
`;

export const MessageInput = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryBackground};
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: chatInput;
  padding: 1.5rem 2.5rem;
`;
