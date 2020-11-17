import React, { ChangeEvent, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore, auth, firebase } from '../../firebase';

import SignOutButton from '../../components/SignOutButton';
import ChatMessage from '../../components/ChatMessage';

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
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData<MessageProps>(query, {
    idField: 'id',
  });
  const [messageValue, setMessageValue] = useState('');

  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setMessageValue(event.target.value);
  };

  const handleFormSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { uid, photoURL } = auth.currentUser as CurrentUserProps;

    await messagesRef.add({
      text: messageValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
  };

  return (
    <main>
      <header>
        <h1>WebChat</h1>
        <SignOutButton />
      </header>
      <section>
        <ul>
          {messages &&
            messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        </ul>
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={messageValue} onChange={handleInputValue} />
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  );
};

export default Chat;
