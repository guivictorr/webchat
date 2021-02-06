import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { ThemeProvider } from 'styled-components';
// import { auth } from './firebase';
import { theme } from './utils/theme.json';

import GlobalStyles from './styles/global';

// import ChatRoom from './pages/ChatRoom';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  // const [user] = useAuthState(auth);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SignIn />
    </ThemeProvider>
  );
};

export default App;
