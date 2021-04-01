import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/auth';

import { Container } from './styles';

const SignOut: React.FC = () => {
  const { signOut } = useAuth();
  const { push } = useHistory();

  const signOutAndNavigate = () => {
    signOut();
    push('/');
  };

  return <Container onClick={signOutAndNavigate}>Sign Out</Container>;
};

export default SignOut;
