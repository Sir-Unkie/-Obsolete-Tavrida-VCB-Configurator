import React from 'react';
import styles from './VCBConfigurator.module.scss';
import CombinedInputs from '../CombinedInputs/CombinedInputs';
import CustomButton from '../CustomButton/CustomButton';
import MyInput from '../MyInput/MyInput';
import VCBImage from '../VCBImage/VCBImage';

const VCBConfigurator = ({ vcbState, clearFields, imageUrl }) => {
  return (
    <div className={styles.VCBcontainer}>
      <CombinedInputs>
        {Object.keys(vcbState).map(key => {
          return (
            <MyInput
              value={vcbState[key].value}
              key={key}
              options={vcbState[key].adjustedOptions}
              parName={key}
            ></MyInput>
          );
        })}
        <div className='buttonsContainer'>
          <CustomButton>Make an order</CustomButton>
          <CustomButton inverted={true} clickHandler={clearFields}>
            Clear
          </CustomButton>
        </div>
      </CombinedInputs>
      <VCBImage imageUrl={imageUrl}></VCBImage>
    </div>
  );
};

export default VCBConfigurator;
