import React from 'react';
import { ChatMessageProps } from '../../interfaces';
import { ChatMessageContainer } from './styles';

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const { text, photoURL, name, createdAt } = message;

  const handleMessageDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('pt-br');
  };

  return (
    <ChatMessageContainer>
      <figure>
        <img src={photoURL} alt={name} />
      </figure>
      <div>
        <h3>{name || 'Anonymous'}</h3>
        <span>
          {createdAt !== null && handleMessageDate(createdAt.seconds)}
        </span>
        <p>{text}</p>
      </div>
    </ChatMessageContainer>
  );
};

export default ChatMessage;
