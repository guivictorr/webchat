import React from 'react';
import { auth } from '../../firebase';

import { SignOutContainer } from './styles';

const SignOut: React.FC = () => {
  return (
    auth.currentUser && (
      <SignOutContainer type="button" onClick={() => auth.signOut()}>
        Sign out
      </SignOutContainer>
    )
  );
};

export default SignOut;
