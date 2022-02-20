import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IoMdSend } from 'react-icons/io';
import { useAuthState } from 'react-firebase-hooks/auth';
import InfiniteScroll from 'react-infinite-scroll-component';

import { auth } from '@firebase';
import useMessages from 'hooks/useMessages';

import ChatMessage from 'components/ChatMessage';
import Input from 'components/Input';
import Button from 'components/Button';

import MessageLoader from 'components/MessageLoader';
import * as S from './styles';

const Chat = () => {
  const { push } = useHistory();
  const [error, setError] = useState(false);
  const { messages, handleAddMessage, fetchMore, isEmpty } = useMessages();
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
      <S.Chat id="scrollableDiv">
        <InfiniteScroll
          dataLength={messages.length}
          hasMore={!isEmpty}
          loader={<MessageLoader />}
          next={fetchMore}
          scrollThreshold={0.8}
          style={{
            display: 'flex',
            flexDirection: 'column-reverse',
            gap: '3.2rem',
          }}
          inverse
          scrollableTarget="scrollableDiv"
        >
          {messages?.map(message => (
            <ChatMessage message={message} key={message.id} />
          ))}
        </InfiniteScroll>
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
