import React from 'react';
import { ChatMessageProps } from '../../interfaces';
import { ChatMessageContainer, TextContent } from './styles';

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const { text, photoURL, name, createdAt } = message;

  const handleMessageDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('pt-br');
  };

  const chatMessageAnimation = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transtion: {
        delay: 5,
      },
    },
  };

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
        <span>
          {createdAt !== null && handleMessageDate(createdAt.seconds)}
        </span>
        <p>{text}</p>
      </TextContent>
    </ChatMessageContainer>
  );
};

export default ChatMessage;
