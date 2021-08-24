import React from 'react';
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
      imageUrl={'/img/LDCrossSection.png'}
    ></VCBConfigurator>
  );
};

export default LDPage;
