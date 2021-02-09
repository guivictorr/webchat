import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { IoMdSend } from 'react-icons/io';

import useMessages from '../../hooks/useMessages';
import { CurrentUserProps } from '../../interfaces';
import { auth } from '../../firebase';

import ChatMessage from '../../components/ChatMessage';
import SignOut from '../../components/SignOut';

import { ChatRoomContainer } from './styles';

const Chat: React.FC = () => {
  const [error, setError] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const messageEndRef = useRef<HTMLDivElement>(null);
  const { messages, handleAddMessage } = useMessages();
  const { photoURL, displayName } = auth.currentUser as CurrentUserProps;

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
      <aside>
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
          <img src={photoURL} alt={displayName} />
          <p>{displayName}</p>
        </footer>
      </aside>
      <main>
        <header>
          <p>Chat</p>
          <SignOut />
        </header>
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
      </main>
    </ChatRoomContainer>
  );
};

export default Chat;
