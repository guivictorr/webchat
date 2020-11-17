import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

import ChatRoom from './pages/ChatRoom';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  const [user] = useAuthState(auth);

  return user ? <ChatRoom /> : <SignIn />;
};

export default App;
