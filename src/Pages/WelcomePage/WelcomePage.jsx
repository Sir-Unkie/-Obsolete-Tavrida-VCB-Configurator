import React from 'react';
import styles from './WelcomePage.module.scss';
import SignIn from '../../Components/signin/SignIn.component';
import SignUp from '../../Components/sign-up/SignUp.component';

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome, you must be logged in to work with application</h1>
      <p>
        Please loggin using you goggle account or log in with email and password
      </p>
    </div>
  );
};

export default WelcomePage;
