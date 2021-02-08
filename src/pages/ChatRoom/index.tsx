import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { SiHipchat } from 'react-icons/si';
import { IoMdSend } from 'react-icons/io';
import useMessages from '../../hooks/useMessages';

import ChatMessage from '../../components/ChatMessage';

import { ChatRoomContainer } from './styles';
import { auth } from '../../firebase';

const Chat: React.FC = () => {
  const [error, setError] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const messageEndRef = useRef<HTMLDivElement>(null);
  const { messages, handleAddMessage } = useMessages();

  const handleScrollChatToBottom = () => {
    if (messageEndRef.current !== null) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setMessageValue(event.target.value);
  };

  const handleFormSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (!messageValue) {
        setError('Type something!');
        return;
      }

      await handleAddMessage(messageValue);

      setMessageValue('');
      setError('');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleScrollChatToBottom();
  }, [handleScrollChatToBottom]);

  return (
    <ChatRoomContainer error={error}>
      <header>
        <h1>
          <SiHipchat size={36} color="#FAD02C" />
          WebChat
        </h1>
        <button onClick={() => auth.signOut()} type="button">
          SAI
        </button>
      </header>
      <ul>
        {messages &&
          messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={messageEndRef} />
      </ul>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={messageValue}
          onChange={handleInputValue}
          placeholder="Type something..."
        />
        <button type="submit">
          <IoMdSend size={26} color="#FAD02C" />
        </button>
      </form>
    </ChatRoomContainer>
  );
};

export default Chat;
