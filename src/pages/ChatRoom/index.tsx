import React, { useEffect, useState } from 'react';
import { IoMdSend } from 'react-icons/io';

import useMessages from 'hooks/useMessages';
import { useAuth } from 'context/auth';

import ChatMessage from 'components/ChatMessage';
import SignOut from 'components/SignOut';

import Input from 'components/Input';
import Button from 'components/Button';
import * as S from './styles';

const Chat = () => {
  const [error, setError] = useState(false);
  const { messages, handleAddMessage } = useMessages();
  const [inputValue, setInputValue] = useState('');

  const {
    user: { displayName, photoURL },
  } = useAuth();

  const handleInput = (value: string) => {
    setInputValue(value);
  };

  const sendMessage = async () => {
    if (!inputValue) {
      setError(true);
      return;
    }

    await handleAddMessage(inputValue);
    setInputValue('');
    setError(false);
  };

  useEffect(() => {
    const sendMessageOnKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        sendMessage();
      }
    };

    window.addEventListener('keyup', sendMessageOnKeyUp);

    return () => window.removeEventListener('keyup', sendMessageOnKeyUp);
  }, [sendMessage]);

  return (
    <S.ChatRoomContainer>
      <S.SideBar>
        <S.Title>Hello!</S.Title>
        <S.SideBarContent>
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
        </S.SideBarContent>
        <S.Profile>
          <figure>
            <img src={photoURL} alt={displayName} />
          </figure>
          <p>{displayName}</p>
        </S.Profile>
      </S.SideBar>

      <S.TopChat>
        <p>Chat</p>
        <SignOut />
      </S.TopChat>
      <S.Chat>
        {messages?.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </S.Chat>
      <S.MessageInput>
        <Input
          placeholder="Talk in the chat"
          onType={handleInput}
          error={error}
          value={inputValue}
          icon={
            <Button onClick={sendMessage} size="small" icon={<IoMdSend />} />
          }
        />
      </S.MessageInput>
    </S.ChatRoomContainer>
  );
};

export default Chat;
