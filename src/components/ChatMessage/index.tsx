import React from 'react';

import { ChatMessageProps } from '../../interfaces';

import { ChatMessageContainer, TextContent } from './styles';
import { chatMessageAnimation } from './animations';
import formatDate from '../../utils/formatDate';

const ChatMessage = ({ message }: ChatMessageProps) => {
  const { text, photoURL, name, createdAt } = message;

  return (
    <ChatMessageContainer
      variants={chatMessageAnimation}
      initial="hidden"
      animate="show"
    >
      <figure>
        <img src={photoURL} alt={name} />
      </figure>
      <TextContent>
        <h3>{name || 'Anonymous'}</h3>
        <span>{formatDate(createdAt.seconds * 1000)}</span>
        <p>{text}</p>
      </TextContent>
    </ChatMessageContainer>
  );
};

export default ChatMessage;
