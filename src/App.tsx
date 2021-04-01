import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './context/auth';
import { theme } from './utils/theme.json';

import GlobalStyles from './styles/global';

import Routes from './routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
