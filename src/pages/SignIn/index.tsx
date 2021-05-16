import React from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useAuth } from '../../context/auth';

import Button from '../../components/Button/styles';

import illustration from '../../assets/illustration.svg';
import logo from '../../assets/logo.svg';
import googleicon from '../../assets/googleicon.svg';

import animations from './animations';
import SignInContainer from './styles';

const SignIn = () => {
  const { push } = useHistory();
  const { signInAnonymous, signInWithGoogle } = useAuth();

  const {
    mainAnimation,
    mainChildrenAnimation,
    sectionAnimation,
    sectionChildrenAnimation,
  } = animations;

  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
    push('/chat');
  };

  const handleAnonymousLogin = () => {
    signInAnonymous();
    push('/chat');
  };

  return (
    <SignInContainer exit={{ opacity: 0 }}>
      <motion.main variants={mainAnimation} initial="hidden" animate="show">
        <motion.header variants={mainChildrenAnimation}>
          <img src={logo} alt="WebChat" loading="lazy" />
        </motion.header>
        <motion.form variants={mainChildrenAnimation}>
          <header>
            <h1>WELCOME</h1>
            <span>Sign In</span>
          </header>
          <Button onClick={handleAnonymousLogin} type="button">
            Log In as anonymous
          </Button>
          <h2>OR</h2>
          <Button
            backgroundColor="buttonText"
            onClick={handleSignInWithGoogle}
            type="button"
          >
            <img src={googleicon} alt="Login with google" />
          </Button>
        </motion.form>
        <motion.footer variants={mainChildrenAnimation}>
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
        </motion.footer>
      </motion.main>
      <motion.section
        variants={sectionAnimation}
        initial="hidden"
        animate="show"
      >
        <motion.figure variants={sectionChildrenAnimation}>
          <motion.img
            variants={sectionChildrenAnimation}
            src={illustration}
            alt="Your place to talk"
            loading="lazy"
          />
        </motion.figure>
      </motion.section>
    </SignInContainer>
  );
};

export default SignIn;
