import React from 'react';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import { ReactComponent as TelLogo } from '../../assets/icons/Group.svg';

import { useSelector } from 'react-redux';

const Header = () => {
  const userState = useSelector(state => state.User);
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.leftSide}>
          <div>
            <TelLogo className={styles.tavridaLogo}></TelLogo>
          </div>
          <div className={styles.greeting}>
            Welcome
            {userState !== null && userState !== undefined
              ? ` ${userState.displayName}!`
              : `!`}
          </div>
        </div>
        <Navigation></Navigation>
      </div>
    </header>
  );
};

export default Header;
