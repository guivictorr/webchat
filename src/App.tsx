import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme.json';

import GlobalStyles from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
