import React from 'react';
import styles from './VCBImage.module.scss';
const VCBImage = ({ imageUrl }) => {
  return (
    <div className={styles.imgContainer}>
      <div
        className={styles.mainImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    </div>
  );
};

export default VCBImage;
