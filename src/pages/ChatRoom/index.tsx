import React, { useEffect, useState } from 'react';
import { IoMdSend } from 'react-icons/io';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import useMessages from 'hooks/useMessages';

import ChatMessage from 'components/ChatMessage';

import Input from 'components/Input';
import Button from 'components/Button';
import { auth } from '@firebase';
import { useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import * as S from './styles';

const Chat = () => {
  const { push } = useHistory();
  const [error, setError] = useState(false);
  const { messages, handleAddMessage, isLoading } = useMessages();
  const [inputValue, setInputValue] = useState('');
  const [user] = useAuthState(auth);

  const handleInput = (value: string) => {
    setInputValue(value);
  };

  const sendMessage = async () => {
    if (!inputValue) {
      setError(true);
      return;
    }

    setInputValue('');
    setError(false);
    await handleAddMessage(inputValue);
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
            <img src={user.photoURL} alt={user.displayName} />
          </figure>
          <p>{user.displayName}</p>
        </S.Profile>
      </S.SideBar>

      <S.TopChat>
        <p>Chat</p>
        <Button onClick={handleSignOut} size="medium">
          Sign Out
        </Button>
      </S.TopChat>
      <S.Chat>
        {isLoading
          ? Array.from(
              {
                length: 10,
              },
              (_, index) => (
                <S.Loading key={index}>
                  <Skeleton circle width={52} height={52} baseColor="gray" />
                  <div>
                    <Skeleton width={200} baseColor="gray" />
                    <Skeleton width={150} baseColor="gray" />
                    <Skeleton
                      width={150}
                      baseColor="gray"
                      style={{
                        marginTop: 10,
                      }}
                    />
                  </div>
                </S.Loading>
              ),
            )
          : messages?.map(message => (
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
