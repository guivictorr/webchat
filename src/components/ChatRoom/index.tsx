import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from '../../firebase';

import SignOutButton from '../SignOutButton';
import ChatMessage from '../ChatMessage';

interface MessageProps {
  id: string;
  text: string;
  uid: string;
  createdAt: Date | string;
}

const Chat: React.FC = () => {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData<MessageProps>(query, {
    idField: 'id',
  });

  return (
    <div>
      <SignOutButton />
      <ul>
        {messages &&
          messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </ul>
    </div>
  );
};

export default Chat;
