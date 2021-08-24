import React from 'react';
import CombinedInputs from '../../Components/CombinedInputs/CombinedInputs';
import CustomButton from '../../Components/CustomButton/CustomButton';
import MyInput from '../../Components/MyInput/MyInput';
import LDImage from '../../Components/VCBImage/VCBImage';
import styles from './LDPage.module.scss';
import { clear } from '../../Store/LDvcbSlice';
import { useSelector, useDispatch } from 'react-redux';
import VCBConfigurator from '../../Components/VCBConfigurator/VCBConfigurator';

const LDPage = () => {
  const dispatch = useDispatch();
  const LDvcbState = useSelector(state => state.LDvcb);
  const clearFields = () => {
    dispatch(clear());
  };

  return (
    <VCBConfigurator
      clearFields={clearFields}
      vcbState={LDvcbState}
    ></VCBConfigurator>
  );

  // return (
  //   <div className={styles.LDcontainer}>
  //     <CombinedInputs>
  //       {Object.keys(LDvcbState).map(key => {
  //         return (
  //           <MyInput
  //             value={LDvcbState[key].value}
  //             key={key}
  //             options={LDvcbState[key].adjustedOptions}
  //             parName={key}
  //           ></MyInput>
  //         );
  //       })}
  //       <div className='buttonsContainer'>
  //         <CustomButton>Make an order</CustomButton>
  //         <CustomButton inverted={true} clickHandler={clearFields}>
  //           Clear
  //         </CustomButton>
  //       </div>
  //     </CombinedInputs>
  //     <LDImage></LDImage>
  //   </div>
  // );
};

export default LDPage;
