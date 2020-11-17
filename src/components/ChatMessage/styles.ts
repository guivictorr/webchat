import styled, { css } from 'styled-components';

interface ChatMessageContainerProps {
  messageClass: string;
}

export const ChatMessageContainer = styled.li<ChatMessageContainerProps>`
  display: flex;
  align-items: center;

  p {
    word-wrap: break-word;
    text-align: left;
    max-width: 200px;
    width: auto;
    padding: 6px;
  }

  & + li {
    margin-top: 10px;
  }

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 0 10px;
  }

  ${({ messageClass }) =>
    messageClass === 'sent'
      ? css`
          flex-direction: row-reverse;
          p {
            background-color: #90adc6;
            border-radius: 6px 0 6px 6px;
          }
        `
      : css`
          p {
            background-color: #333652;
            color: #e9eaec;
            border-radius: 0 6px 6px 6px;
          }
        `}
`;
