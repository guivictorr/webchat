import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@firebase';

const PrivateRoute = ({ ...rest }: RouteProps) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p>loading</p>;
  }

  return user ? <Route {...rest} /> : <Redirect to="/" />;
};

export default PrivateRoute;
