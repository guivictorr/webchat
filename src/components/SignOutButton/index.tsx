import React from 'react';
import { auth } from '../../firebase';

const SignIn: React.FC = () => {
  return (
    auth.currentUser && (
      <button type="button" onClick={() => auth.signOut()}>
        SignOut
      </button>
    )
  );
};

export default SignIn;
