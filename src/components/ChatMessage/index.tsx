import React from 'react';

import { ChatMessageProps } from 'interfaces';

import formatDate from 'utils/formatDate';
import { ChatMessageContainer, TextContent } from './styles';
import { chatMessageAnimation } from './animations';

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
        <span>{createdAt && formatDate(createdAt.seconds * 1000)}</span>
        <p>{text}</p>
      </TextContent>
    </ChatMessageContainer>
  );
};

export default ChatMessage;
