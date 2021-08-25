import React, { useState } from 'react';
import styles from './Burger.module.scss';

const Burger = ({ handler, navHidden }) => {
  const [animate, setAnimate] = useState('');
  const clickHandler = () => {
    handler();
    setAnimate(`${styles.animate}`);
  };
  return (
    <div
      onClick={clickHandler}
      className={
        navHidden
          ? `${styles.button} ${styles.navHidden} ${animate}`
          : `${styles.button} ${styles.navShown} ${animate}`
      }
    >
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
      <div className={styles.line3}></div>
    </div>
  );
};

export default Burger;
