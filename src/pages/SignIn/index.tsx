import React, { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useAuth } from '../../context/auth';
import { theme } from '../../utils/theme.json';

import illustration from '../../assets/illustration.svg';
import logo from '../../assets/logo.svg';
import googleicon from '../../assets/googleicon.svg';

import Button from '../../components/Button';

import SignInContainer from './styles';

const SignIn = () => {
  const { push } = useHistory();
  const { signInAnonymous, signInWithGoogle } = useAuth();

  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
    push('/chat');
  };

  const handleAnonymousLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInAnonymous();
    push('/chat');
  };

  const sectionAnimation = {
    hidden: {
      width: 0,
    },
    show: {
      width: '60%',
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
        duration: 2,
        type: 'spring',
        stiffness: 50,
      },
    },
  };

  const sectionChildrenAnimation = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const mainAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 1,
      },
    },
  };

  const mainChildrenAnimation = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <SignInContainer exit={{ opacity: 0 }}>
      <motion.main variants={mainAnimation} initial="hidden" animate="show">
        <motion.header variants={mainChildrenAnimation}>
          <img src={logo} alt="WebChat" loading="lazy" />
        </motion.header>
        <motion.form
          onSubmit={handleAnonymousLogin}
          variants={mainChildrenAnimation}
        >
          <header>
            <h1>WELCOME</h1>
            <span>Sign In</span>
          </header>
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
