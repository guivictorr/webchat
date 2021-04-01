import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import SignIn from '../pages/SignIn';
import ChatRoom from '../pages/ChatRoom';

import { useAuth } from '../context/auth';

const Routes = () => {
  const { user } = useAuth();
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/chat">{user ? <ChatRoom /> : <Redirect to="/" />}</Route>
      </Switch>
    </Router>
  );
};

export default Routes;
