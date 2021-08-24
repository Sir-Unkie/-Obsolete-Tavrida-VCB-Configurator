import React from 'react';
import styles from './SignInSignUpPage.module.scss';
import SignIn from '../../../Components/signin/SignIn.component';
import SignUp from '../../../Components/sign-up/SignUp.component';

const SignInSignUpPage = () => {
  return (
    <div className={styles.signInContainer}>
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};

export default SignInSignUpPage;
