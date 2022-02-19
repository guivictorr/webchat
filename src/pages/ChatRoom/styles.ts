import styled, { css } from 'styled-components';

export const ChatRoomContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 36rem 1fr;
  grid-template-rows: 7rem 1fr 7rem;
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
    padding: ${theme.spacings.xsmall} ${theme.spacings.large};
    font-size: calc(${theme.font.sizes.xsmall} * 2);
  `}

  display: flex;
  align-items: center;
  height: 7rem;
`;

export const SideBarContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.contrastBackground};
    color: ${theme.colors.primary};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.xlarge};

    a {
      text-decoration: none;
      color: ${theme.colors.buttonColor};
      margin: 0 ${theme.spacings.xxsmall};
    }
  `}

  flex: 1;
`;

export const Profile = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryBackground};
    color: ${theme.colors.primary};
    padding: ${theme.spacings.xxsmall} 0 ${theme.spacings.xxsmall}
      ${theme.spacings.small};

    figure {
      width: 40px;
      height: 40px;
      border-radius: ${theme.borderRadius.rounded};
      background-color: ${theme.colors.buttonColor};
      overflow: hidden;
      margin-right: ${theme.spacings.xxsmall};

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  `}

  display: flex;
  align-items: center;
  height: 7rem;
`;

export const TopChat = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.contrastBackground};
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xlarge};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
  `}

  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: chatTop;
`;

export const Chat = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryBackground};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
    gap: ${theme.spacings.medium};
    @media (max-width: 468px) {
      padding: ${theme.spacings.xxsmall};
    }
  `}
  grid-area: chat;
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
`;

export const MessageInput = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryBackground};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: chatInput;
`;

export const Loading = styled.div`
  max-width: 30px;
  display: flex;
  align-items: flex-start;

  > div {
    margin-left: 1rem;
  }
`;
