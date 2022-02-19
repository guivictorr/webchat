import React from 'react';

import { ChatMessageProps } from 'interfaces';

import formatDate from 'utils/formatDate';
import * as S from './styles';

const ChatMessage = ({ message }: ChatMessageProps) => {
  const { text, photoURL, name, createdAt } = message;
  const date = formatDate(createdAt.seconds * 1000);
  return (
    <S.Wrapper>
      <S.Avatar src={photoURL} alt={name} />
      <S.TextContainer>
        <S.Name translate="no">{name}</S.Name>
        <S.CreatedAt>{date}</S.CreatedAt>
        <S.Message>{text}</S.Message>
      </S.TextContainer>
    </S.Wrapper>
  );
};

export default ChatMessage;
