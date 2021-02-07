import React from 'react';
import { MdEmail, MdLock } from 'react-icons/md';

import { theme } from '../../utils/theme.json';

import illustration from '../../assets/illustration.svg';
import logo from '../../assets/logo.svg';
import googleicon from '../../assets/googleicon.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Form from '../../components/Form';

import SignInContainer from './styles';

const SignIn: React.FC = () => {
  return (
    <SignInContainer>
      <main>
        <img src={logo} alt="WebChat" loading="lazy" />
        <Form title="Sign In" subTitle="WELCOME">
          <Input icon={MdEmail} placeholder="Enter your email" type="email" />
          <Input
            icon={MdLock}
            isPassword
            type="password"
            placeholder="Enter your password"
          />
          <Button
            type="button"
            title="Sign In"
            backgroundColor={theme.colors.buttonColor}
          />
          <p>
            Dont have an account?
            <a href="https://github.com/guivictorr">Sign Up</a>
          </p>
          <h2>OR</h2>
          <Button
            title="Log in with Google"
            image={googleicon}
            backgroundColor="#f5f5f5"
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
