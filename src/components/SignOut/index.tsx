import React from 'react';
import { auth } from '../../firebase';

import { Container } from './styles';

const SignOut: React.FC = () => {
  const handleSignOut = () => {
    auth.signOut();
  };

  return <Container onClick={handleSignOut}>Sign Out</Container>;
};

export default SignOut;
