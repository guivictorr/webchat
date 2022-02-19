import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'components/Button';
import { FcGoogle } from 'react-icons/fc';

import { signInWithGoogle } from '@firebase';

import * as S from './styles';

const SignInForm = () => {
  const { push } = useHistory();

  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
    push('/chat');
  };

  return (
    <S.Wrapper>
      <S.Form>
        <S.Header>
          <S.Welcome>Welcome</S.Welcome>
          <S.SignIn>Sign In</S.SignIn>
        </S.Header>
        <Button onClick={handleSignInWithGoogle} minimal type="button">
          <FcGoogle size={24} />
        </Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default SignInForm;
