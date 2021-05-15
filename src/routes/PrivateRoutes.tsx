import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../context/auth';

const PrivateRoute = ({ ...rest }: RouteProps) => {
  const { user } = useAuth();
  const isLogged = Boolean(user.uid);

  return isLogged ? <Route {...rest} /> : <Redirect to="/" />;
};

export default PrivateRoute;
