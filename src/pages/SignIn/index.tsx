import React from 'react';
import { SiHipchat } from 'react-icons/si';
import SignInButton from '../../components/SignInButton';

import { SignInContainer } from './styles';

const SignIn: React.FC = () => {
  return (
    <SignInContainer>
      <header>
        <SiHipchat size={36} color="#FAD02C" />
        <h1>WebChat</h1>
      </header>
      <SignInButton />
    </SignInContainer>
  );
};

export default SignIn;
