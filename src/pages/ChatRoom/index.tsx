import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { IoMdSend } from 'react-icons/io';

import { motion } from 'framer-motion';
import useMessages from '../../hooks/useMessages';

import ChatMessage from '../../components/ChatMessage';
import SignOut from '../../components/SignOut';

import { ChatRoomContainer, SideBar, ChatRoom } from './styles';
import { useAuth } from '../../context/auth';

const Chat: React.FC = () => {
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

  const sideBarAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    show: {
      opacity: 1,
      width: 360,
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 30,
      },
    },
  };

  return (
    <ChatRoomContainer animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <SideBar variants={sideBarAnimation} initial="hidden" animate="show">
        <header>
          <p>Hello!</p>
        </header>
        <main>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.5 } }}
          >
            This project was developed by
            <a
              href="https://github.com/guivictorr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guilherme Victor
            </a>
            and is not storing any personal data from you.
          </motion.p>
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
