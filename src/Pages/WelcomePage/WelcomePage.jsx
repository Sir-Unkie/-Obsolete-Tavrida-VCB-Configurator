import React from 'react';
import styles from './WelcomePage.module.scss';
import SignIn from '../../Components/signin/SignIn.component';
import SignUp from '../../Components/sign-up/SignUp.component';
import Options from '../../Components/Options/Options';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const WelcomePage = () => {
  const userState = useSelector(state => state.User);
  return (
    <div>
      {userState && <Options></Options>}
      {!userState && (
        <div className={styles.welcomeContainer}>
          <h1 className={styles.heading}>
            Welcome, you must be logged in to work with application
          </h1>
          <p className={styles.paragraph}>
            Please log in using your Google account or log in with email and
            password password
          </p>
          <Link to='/SignIn' className={styles.Btn}>
            Log In
          </Link>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
