import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { SiHipchat } from 'react-icons/si';
import { IoMdSend, IoIosExit } from 'react-icons/io';
import { firestore, auth, firebase } from '../../firebase';

import SignOutButton from '../../components/SignOutButton';
import ChatMessage from '../../components/ChatMessage';

import { ChatRoomContainer } from './styles';

interface MessageProps {
  id: string;
  text: string;
  uid: string;
  createdAt: Date | string;
  photoURL: string;
}

interface CurrentUserProps {
  photoURL: string;
  uid: string;
}

const Chat: React.FC = () => {
  const [error, setError] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const messageEndRef = useRef<HTMLDivElement>(null);
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt');
  const [messages] = useCollectionData<MessageProps>(query, {
    idField: 'id',
  });

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

    const { uid, photoURL } = auth.currentUser as CurrentUserProps;

    try {
      if (!messageValue) {
        setError('Type something!');
        return;
      }

      await messagesRef.add({
        text: messageValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
      });
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
        <SignOutButton />
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
