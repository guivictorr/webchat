import React from 'react';
import { auth } from '../../firebase';

import { ChatMessageContainer } from './styles';

interface ChatMessage {
  message: MessageProps;
}

interface MessageProps {
  text: string;
  uid: string;
  id: string;
  createdAt: Date | string;
  photoURL: string;
}

const ChatMessage: React.FC<ChatMessage> = ({ message }) => {
  const { text, photoURL, uid } = message;
  const messageClass = uid === auth.currentUser?.uid ? 'send' : 'received';

  return (
    <ChatMessageContainer messageClass={messageClass}>
      <img src={photoURL} alt="User" />
      <p>{text}</p>
    </ChatMessageContainer>
  );
};

export default ChatMessage;
