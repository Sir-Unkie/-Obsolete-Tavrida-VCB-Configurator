import React from 'react';
import styles from './Navigation.module.scss';
import { NavLink, Link } from 'react-router-dom';
import { auth } from '../../Firebase/firebase.utils';
import { useDispatch, useSelector } from 'react-redux';
import { userClear } from '../../Store/UserSlice';
import { useHistory } from 'react-router-dom';

const Navigation = () => {
  let history = useHistory();
  const userState = useSelector(state => state.User);
  const dispatch = useDispatch();
  const signOutHandler = () => {
    auth.signOut();
    localStorage.clear();
    dispatch(userClear());
    history.push('./');
  };

  return (
    <nav className={styles.navigation}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/LD'>LD series</NavLink>
      <NavLink to='/MD'>MD series</NavLink>
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
