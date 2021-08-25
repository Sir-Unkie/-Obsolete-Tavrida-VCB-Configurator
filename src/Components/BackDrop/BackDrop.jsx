import React from 'react';
import styles from './BackDrop.module.scss';
import { motion } from 'framer-motion';

const BackDrop = ({ handler }) => {
  const clickHandler = () => {
    handler();
  };
  return (
    <motion.div
      key='backdrop'
      transition={{ type: 'Tween', duration: 0.3 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.backdrop}
      onClick={clickHandler}
    ></motion.div>
  );
};

export default BackDrop;
