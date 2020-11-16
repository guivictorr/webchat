import React from 'react';
import { firebase, auth } from '../../firebase';

const SignIn: React.FC = () => {
  const handleSignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <button type="button" onClick={handleSignInWithGoogle}>
      Login with Google
    </button>
  );
};

export default SignIn;
