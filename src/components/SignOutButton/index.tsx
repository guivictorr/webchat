import React from 'react';
import { IoMdExit } from 'react-icons/io';
import { auth } from '../../firebase';

import { SignOutContainer } from './styles';

const SignOut: React.FC = () => {
  return (
    auth.currentUser && (
      <SignOutContainer type="button" onClick={() => auth.signOut()}>
        <p>Sign out</p>
        <IoMdExit size={20} color="#333652" />
      </SignOutContainer>
    )
  );
};

export default SignOut;
