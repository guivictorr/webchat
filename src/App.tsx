import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

import GlobalStyles from './styles/global';

import ChatRoom from './pages/ChatRoom';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <GlobalStyles />
      {user ? <ChatRoom /> : <SignIn />}
    </>
  );
};

export default App;
