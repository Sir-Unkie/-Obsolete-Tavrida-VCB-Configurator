import React from 'react';
import styles from './CombinedInputs.module.scss';

const CombinedInputs = props => {
  return <div className={styles.container}>{props.children}</div>;
};

export default CombinedInputs;
