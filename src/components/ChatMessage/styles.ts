import styled from 'styled-components';

export const ChatMessageContainer = styled.li`
  display: flex;

  & + li {
    margin-top: 50px;
  }

  img {
    width: 52px;
    height: 52px;
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  div {
    margin-left: 15px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: transparent;
    padding: 0;

    h3 {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.primary};
    }

    span {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 12px;
    }

    p {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 18px;
      width: 900px;
      word-wrap: break-word;
      margin-top: 5px;
    }
  }
`;
