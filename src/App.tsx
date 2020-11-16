import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, firestore, firebase } from './firebase';

import Chat from './pages/Chat';

const App: React.FC = () => {
  return <Chat />;
};

export default App;
