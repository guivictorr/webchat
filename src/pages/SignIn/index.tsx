import React, { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { firebase, auth } from '../../firebase';
import { theme } from '../../utils/theme.json';

import illustration from '../../assets/illustration.svg';
import logo from '../../assets/logo.svg';
import googleicon from '../../assets/googleicon.svg';

import Button from '../../components/Button';
import Form from '../../components/Form';

import SignInContainer from './styles';

const SignIn: React.FC = () => {
  const { push } = useHistory();

  const handleSignInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
    push('/chat');
  };

  const handleAnonymousLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await auth.signInAnonymously();
    push('/chat');
  };

  return (
    <SignInContainer>
      <main>
        <header>
          <img src={logo} alt="WebChat" loading="lazy" />
        </header>
        <Form title="Log In" subTitle="WELCOME" onSubmit={handleAnonymousLogin}>
          <Button
            title="Log In as anonymous"
            backgroundColor={theme.colors.buttonColor}
            type="submit"
          />
          <h2>OR</h2>
          <Button
            title="Log in with Google"
            image={googleicon}
            backgroundColor="#f5f5f5"
            onClick={handleSignInWithGoogle}
            type="button"
          />
        </Form>
        <footer>
          <p>
            Made with 💙 by
            <a
              href="https://github.com/guivictorr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guilherme Victor
            </a>
          </p>
        </footer>
      </main>
      <section>
        <figure>
          <img src={illustration} alt="Your place to talk" loading="lazy" />
        </figure>
      </section>
    </SignInContainer>
  );
};

export default SignIn;
