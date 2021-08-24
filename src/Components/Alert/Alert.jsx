import React from 'react';
import styles from './Alert.module.scss';
import Spinner from '../Spinner/Spinner';

const Alert = ({ message, messageType }) => {
  let alertStyle;

  switch (messageType) {
    case 'error':
      alertStyle = `${styles.alert} ${styles.error}`;
      break;
    case 'success':
      alertStyle = `${styles.alert} ${styles.success}`;
      break;
    case 'loading':
      alertStyle = `${styles.alert} ${styles.loading}`;
      break;
    case 'initial':
      alertStyle = `${styles.alert} ${styles.initial}`;
      break;

    default:
      break;
  }

  return (
    <div className={`${alertStyle}`}>
      <div className={styles.message}>{message}</div>
      {messageType === 'loading' ? <Spinner></Spinner> : null}
    </div>
  );
};

export default Alert;
