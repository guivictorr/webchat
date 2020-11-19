import React from 'react';
import { auth } from '../../firebase';
import { ChatMessageProps } from '../../interfaces';
import { ChatMessageContainer } from './styles';

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const { text, photoURL, uid } = message;
  const messageClass = uid === auth.currentUser?.uid ? 'sent' : 'received';

  return (
    <ChatMessageContainer messageClass={messageClass}>
      <img src={photoURL} alt="User" />
      <p>{text}</p>
    </ChatMessageContainer>
  );
};

export default ChatMessage;
