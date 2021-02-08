import React, { FormEvent } from 'react';
import { FaTheaterMasks } from 'react-icons/fa';

import { firebase, auth } from '../../firebase';
import { theme } from '../../utils/theme.json';

import illustration from '../../assets/illustration.svg';
import logo from '../../assets/logo.svg';
import googleicon from '../../assets/googleicon.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Form from '../../components/Form';

import SignInContainer from './styles';

const SignIn: React.FC = () => {
  const handleSignInWithGoogle = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <SignInContainer>
      <main>
        <img src={logo} alt="WebChat" loading="lazy" />
        <Form title="Log In" subTitle="WELCOME">
          <fieldset>
            <Input
              icon={FaTheaterMasks}
              type="text"
              placeholder="Enter as anonymous"
              maxLength={20}
            />
            <Button
              title="Log In"
              backgroundColor={theme.colors.buttonColor}
              type="submit"
            />
          </fieldset>
          <h2>OR</h2>
          <Button
            title="Log in with Google"
            image={googleicon}
            backgroundColor="#f5f5f5"
            onClick={handleSignInWithGoogle}
            type="button"
          />
        </Form>
      </main>
      <section>
        <img src={illustration} alt="Your place to talk" loading="lazy" />
      </section>
    </SignInContainer>
  );
};

export default SignIn;
