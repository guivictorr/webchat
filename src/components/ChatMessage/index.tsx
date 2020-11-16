import React from 'react';

interface ChatMessage {
  message: MessageProps;
}

interface MessageProps {
  text: string;
  uid: string;
  id: string;
  createdAt: Date | string;
}

const ChatMessage: React.FC<ChatMessage> = ({ message }) => {
  const { text, uid } = message;

  return (
    <li>
      <p>{text}</p>
    </li>
  );
};

export default ChatMessage;
