import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { auth } from '../firebase';

import SignIn from '../pages/SignIn';
import ChatRoom from '../pages/ChatRoom';

const Routes: React.FC = () => {
  const [user] = useAuthState(auth);

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
