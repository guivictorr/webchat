import React from 'react';

import { ChatMessageProps } from 'interfaces';

import formatDate from 'utils/formatDate';
import { ChatMessageContainer, TextContent } from './styles';

const ChatMessage = ({ message }: ChatMessageProps) => {
  const { text, photoURL, name, createdAt } = message;

  return (
    <ChatMessageContainer>
      <figure>
        <img src={photoURL} alt={name} />
      </figure>
      <TextContent>
        <h3>{name}</h3>
        <span>{createdAt && formatDate(createdAt.seconds * 1000)}</span>
        <p>{text}</p>
      </TextContent>
    </ChatMessageContainer>
  );
};

export default ChatMessage;
