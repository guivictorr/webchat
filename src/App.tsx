import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

import Routes from './routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
