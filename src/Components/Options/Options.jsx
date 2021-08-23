import React from 'react';
import styles from './Options.module.scss';
import { Link } from 'react-router-dom';
import ImageSection from '../ImageSection/ImageSection';

const Options = () => {
  return (
    <div className={styles.optionsContainer}>
      <div className={styles.textArea}>
        <div className={styles.option}>
          <h1 className={styles.heading}>LD vacuum circuit breakers</h1>
          <p className={styles.paragraph}>
            LD series vacuum circuit breakers for rated continuous current up to
            800 A. Available in three-phase and single phase configurations and
            for rated voltages up to 24 kV.{' '}
          </p>
          <Link className={styles.link} to='/LD'>
            LD series
          </Link>
        </div>
        <div className={styles.option}>
          <h1 className={styles.heading}>MD vacuum circuit breakers</h1>
          <p className={styles.paragraph}>
            A brand new vacuum three-phase and single-phase circuit breakers
            type for rated continuous currents up to 1250 A and rated voltages
            up to 17.5 kV with extraordinarily small size and weight.
          </p>
          <br />
          <p className={styles.paragraph}>
            Using the same single-axis design philosophy as the LD series, the
            MD series brings even more innovation in a compact package. At a
            height of only 35 cm, and as narrow as the LD type, the MD circuit
            breaker handles currents as high as 1250 A continuous and 31.5 kA
            short-time and interrupting. Together with any spatial orientation
            capability, the MD series circuit breaker is second to none in terms
            of switchgear design optimization and mounting simplicity.
          </p>
          <Link className={styles.link} to='/MD'>
            MD series
          </Link>
        </div>
        <div className={styles.option}>
          <h1 className={styles.heading}>HD vacuum circuit breakers</h1>
          <p className={styles.paragraph}>
            Heavy Duty series breakers are the most endurant across our product
            range and designed for rated continious currents up to 3150 A. HD
            finally brings all advantages of the best secondary distribution
            circuit breakers by Tavrida Electric to a primary distribution
            class. Never before VCBs with such high ratings were so compact and
            applicable for the most confined panels.
          </p>
          <Link className={styles.link} to='/HD'>
            HD series
          </Link>
        </div>
      </div>
      <ImageSection></ImageSection>
    </div>
  );
};

export default Options;
