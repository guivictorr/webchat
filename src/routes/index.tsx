import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import ChatRoom from '../pages/ChatRoom';
import PrivateRoute from './PrivateRoutes';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <PrivateRoute path="/chat" component={ChatRoom} />
      </Switch>
    </Router>
  );
};

export default Routes;
