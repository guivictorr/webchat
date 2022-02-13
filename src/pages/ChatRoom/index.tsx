import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { IoMdSend } from 'react-icons/io';

import useMessages from 'hooks/useMessages';
import { useAuth } from 'context/auth';

import ChatMessage from 'components/ChatMessage';
import SignOut from 'components/SignOut';

import { ChatRoomContainer, SideBar, ChatRoom } from './styles';

const Chat = () => {
  const [error, setError] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const messageEndRef = useRef<HTMLDivElement>(null);
  const { messages, handleAddMessage } = useMessages();
  const {
    user: { displayName, photoURL },
  } = useAuth();

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
    <ChatRoomContainer>
      <SideBar>
        <header>
          <p>Hello!</p>
        </header>
        <main>
          <p>
            This project was developed by
            <a
              href="https://github.com/guivictorr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guilherme Victor
            </a>
            and is not storing any personal data from you.
          </p>
        </main>
        <footer>
          <figure>
            <img src={photoURL} alt={displayName} />
          </figure>
          <p>{displayName}</p>
        </footer>
      </SideBar>
      <ChatRoom error={error}>
        <nav>
          <p>Chat</p>
          <SignOut />
        </nav>
        <ul>
          {messages?.map(message => (
            <ChatMessage key={message.id} message={message} />
          ))}
          <div ref={messageEndRef} />
        </ul>
        <footer>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Enter your message"
              value={messageValue}
              onChange={handleInputValue}
              maxLength={300}
            />
            <button type="submit">
              <IoMdSend size={24} color="#e0e0e0" />
            </button>
          </form>
        </footer>
      </ChatRoom>
    </ChatRoomContainer>
  );
};

export default Chat;
