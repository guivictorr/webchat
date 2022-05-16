import React from 'react';

import formatDate from 'utils/formatDate';
import { MessageData } from 'hooks/useMessages';
import * as S from './styles';

const ChatMessage = ({
  author,
  authorPic,
  message,
  createdAt,
}: MessageData) => {
  return (
    <S.Wrapper>
      <S.Avatar src={authorPic} alt={author} />
      <S.TextContainer>
        <S.Name translate="no">{author}</S.Name>
        <S.CreatedAt>{formatDate(createdAt || 'Not found')}</S.CreatedAt>
        <S.Message>{message}</S.Message>
      </S.TextContainer>
    </S.Wrapper>
  );
};

export default ChatMessage;
