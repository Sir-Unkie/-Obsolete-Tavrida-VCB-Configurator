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
      <ul>
        <li>
          <NavLink
            activeClassName={styles.active}
            className={styles.navItem}
            to='/'
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.active}
            className={styles.navItem}
            to='/LD'
          >
            LD series
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.active}
            className={styles.navItem}
            to='/MD'
          >
            MD series
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.active}
            className={styles.navItem}
            to='/HD'
          >
            HD series
          </NavLink>
        </li>
        <li>
          {userState && (
            <div className={styles.navItem} onClick={signOutHandler}>
              Sign Out
            </div>
          )}
          {!userState && (
            <Link className={styles.navItem} to='./SignIn'>
              Sign In
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
