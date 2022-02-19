import React from 'react';

import illustration from 'assets/illustration.svg';
import logo from 'assets/logo.svg';

import SignInForm from 'components/SignInForm';

import * as S from './styles';

const SignIn = () => {
  return (
    <S.Wrapper>
      <S.Main>
        <S.Header>
          <img src={logo} alt="WebChat" loading="lazy" />
        </S.Header>
        <SignInForm />
        <S.Footer>
          <p>Made with 💙 by</p>
          <a
            href="https://github.com/guivictorr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guilherme Victor
          </a>
        </S.Footer>
      </S.Main>

      <S.Section>
        <S.Image src={illustration} alt="Your place to talk" loading="lazy" />
      </S.Section>
    </S.Wrapper>
  );
};

export default SignIn;
