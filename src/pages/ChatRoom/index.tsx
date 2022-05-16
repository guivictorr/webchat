import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IoMdSend } from 'react-icons/io';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@firebase';
import useMessages from 'hooks/useMessages';

import ChatMessage from 'components/ChatMessage';
import Input from 'components/Input';
import Button from 'components/Button';

import * as S from './styles';

const Chat = () => {
  const { push } = useHistory();
  const [error, setError] = useState(false);
  const { handleAddMessage, messages } = useMessages();
  const [inputValue, setInputValue] = useState('');
  const [user] = useAuthState(auth);

  const handleInput = (value: string) => {
    setInputValue(value);
  };

  const sendMessage = async () => {
    if (!inputValue || !user) {
      setError(true);
      return;
    }

    await handleAddMessage({
      author: user.displayName || 'Not found',
      authorPic:
        user.photoURL ||
        'https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=2F80ED,649DEA,266ECF,56BEFD,03001C',
      message: inputValue,
      uid: user.uid,
    });
    setInputValue('');
    setError(false);
  };

  const handleSignOut = () => {
    push('/');
    auth.signOut();
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
            <img
              src={
                user?.photoURL ||
                'https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=2F80ED,649DEA,266ECF,56BEFD,03001C'
              }
              alt={user?.photoURL || 'Profile picture'}
            />
          </figure>
          <p>{user?.displayName}</p>
        </S.Profile>
      </S.SideBar>

      <S.TopChat>
        <p>Chat</p>
        <Button onClick={handleSignOut} size="medium">
          Sign Out
        </Button>
      </S.TopChat>
      <S.Chat>
        {messages?.map(message => (
          <ChatMessage {...message.val()} key={message.key} />
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
