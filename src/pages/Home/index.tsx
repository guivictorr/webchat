import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

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
