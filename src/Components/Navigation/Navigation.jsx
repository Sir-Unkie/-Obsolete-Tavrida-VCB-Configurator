import React from 'react';
import styles from './Navigation.module.scss';
import { NavLink, Link } from 'react-router-dom';
import { auth } from '../../Firebase/firebase.utils';
import { useDispatch, useSelector } from 'react-redux';
import { userClear } from '../../Store/UserSlice';

const Navigation = () => {
  const userState = useSelector(state => state.User);
  const dispatch = useDispatch();
  const signOutHandler = () => {
    auth.signOut();
    localStorage.clear();
    dispatch(userClear());
  };

  return (
    <nav className={styles.navigation}>
      <NavLink to='/LD'>To LD page</NavLink>
      <NavLink to='/MD'>To MD page</NavLink>
      <NavLink to='/'>To Home</NavLink>
      {userState && (
        <div onClick={signOutHandler} className={styles.signBtn}>
          Sign Out
        </div>
      )}
      {!userState && (
        <Link to='./SignIn' className={styles.signBtn}>
          Sign In
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
