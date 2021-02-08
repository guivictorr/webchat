import styled, { css } from 'styled-components';

interface ChatRoomProps {
  error: string;
}

export const ChatRoomContainer = styled.div<ChatRoomProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
`;
