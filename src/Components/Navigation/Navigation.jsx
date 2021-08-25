import React, { useState } from 'react';
import styles from './Navigation.module.scss';
import { NavLink, Link } from 'react-router-dom';
import { auth } from '../../Firebase/firebase.utils';
import { useDispatch, useSelector } from 'react-redux';
import { userClear } from '../../Store/UserSlice';
import { useHistory } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import useWindowDimensions from '../../hooks/useWindowDimensionsHook.js';
import Burger from '../Burger/Burger';
import BackDrop from '../BackDrop/BackDrop';

const Navigation = () => {
  const { width } = useWindowDimensions();
  const [navHidden, setNavHidden] = useState(true);
  let history = useHistory();
  const userState = useSelector(state => state.User);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    auth.signOut();
    localStorage.clear();
    dispatch(userClear());
    history.push('./');
  };

  const burgerClickHandler = navHidden => {
    setNavHidden(prevState => {
      return !prevState;
    });
  };

  const backDropClickHandler = navHidden => {
    setNavHidden(prevState => {
      return !prevState;
    });
  };

  return (
    <React.Fragment>
      {width <= 1200 ? (
        <Burger
          navHidden={navHidden}
          handler={burgerClickHandler.bind(null, navHidden)}
        ></Burger>
      ) : null}
      <AnimatePresence exitBeforeEnter>
        {navHidden ? null : (
          <BackDrop
            handler={backDropClickHandler.bind(null, navHidden)}
            key='backdrop'
          ></BackDrop>
        )}
      </AnimatePresence>
      <nav
        className={
          navHidden
            ? `${styles.navigation}`
            : `${styles.navigation} ${styles.shown}`
        }
      >
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
    </React.Fragment>
  );
};

export default Navigation;
