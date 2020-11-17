import React from 'react';
import { SiGoogle } from 'react-icons/si';
import { firebase, auth } from '../../firebase';

import { SignInButtonContainer } from './styles';

const SignInButton: React.FC = () => {
  const handleSignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <SignInButtonContainer>
      <p>Login with Google</p>
      <button type="button" onClick={handleSignInWithGoogle}>
        <SiGoogle size={20} color="#333652" />
      </button>
    </SignInButtonContainer>
  );
};

export default SignInButton;
