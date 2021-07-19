import React from 'react';
import styles from './CustomButton.module.scss';

const CustomButton = props => {
  return (
    <button onClick={props.clickHandler} className={styles.customButton}>
      {props.children}
    </button>
  );
};

export default CustomButton;
