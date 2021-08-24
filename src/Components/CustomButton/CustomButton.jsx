import React from 'react';
import styles from './CustomButton.module.scss';

const CustomButton = ({ clickHandler, inverted, children }) => {
  return (
    <button
      onClick={clickHandler}
      className={
        inverted
          ? `${styles.customButton} ${styles.inverted}`
          : `${styles.customButton}`
      }
    >
      {children}
    </button>
  );
};

export default CustomButton;
