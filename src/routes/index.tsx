import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import ChatRoom from '../pages/ChatRoom';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/chat" component={ChatRoom} />
      </Switch>
    </Router>
  );
};

export default Routes;
