import React from 'react';
import CombinedInputs from '../../Components/CombinedInputs/CombinedInputs';
import CustomButton from '../../Components/CustomButton/CustomButton';
import MyInput from '../../Components/MyInput/MyInput';
import VCBImages from '../../Components/VCBImages/VCBImages';

import { clear } from '../../Store/LDvcbSlice';
import { useSelector, useDispatch } from 'react-redux';

const LDPage = () => {
  const dispatch = useDispatch();
  const LDvcbState = useSelector(state => state.LDvcb);
  const clearFields = () => {
    dispatch(clear());
  };

  return (
    <React.Fragment>
      <CombinedInputs>
        {Object.keys(LDvcbState).map(key => {
          return (
            <MyInput
              value={LDvcbState[key].value}
              key={key}
              options={LDvcbState[key].adjustedOptions}
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
      <VCBImages></VCBImages>
    </React.Fragment>
  );
};

export default LDPage;
