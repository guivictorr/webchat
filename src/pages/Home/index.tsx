import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, firestore } from '../../firebase';

import ChatRoom from '../../components/ChatRoom';
import SignInButton from '../../components/SignInButton';

const Home: React.FC = () => {
  const [user] = useAuthState(auth);

  return (
    <main>
      <header>
        <p>WebChat</p>
      </header>
      <section>{user ? <ChatRoom /> : <SignInButton />}</section>
    </main>
  );
};

export default Home;
