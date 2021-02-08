import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { SiHipchat } from 'react-icons/si';
import { IoMdSend } from 'react-icons/io';
import useMessages from '../../hooks/useMessages';

import ChatMessage from '../../components/ChatMessage';

import { ChatRoomContainer } from './styles';
import { auth } from '../../firebase';
import { CurrentUserProps } from '../../interfaces';

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
          <p>Title</p>
        </header>
        <main>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus nihil, atque rem at modi consequuntur velit id ut amet
            perspiciatis dicta autem. Ab, tempore earum?
          </p>
        </main>
        <footer>
          <img src={photoURL} alt={displayName} />
          <p>{displayName}</p>
        </footer>
      </aside>
    </ChatRoomContainer>
  );
};

export default Chat;
