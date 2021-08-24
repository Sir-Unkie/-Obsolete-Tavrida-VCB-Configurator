import React from 'react';
import { clear } from '../../Store/LDvcbSlice';
import { useSelector, useDispatch } from 'react-redux';
import VCBConfigurator from '../../Components/VCBConfigurator/VCBConfigurator';

const MDPage = () => {
  const dispatch = useDispatch();
  const MDvcbState = useSelector(state => state.MDvcb);
  const clearFields = () => {
    dispatch(clear());
  };

  return (
    <VCBConfigurator
      clearFields={clearFields}
      vcbState={MDvcbState}
      imageUrl={'/img/MDbreaker.png'}
    ></VCBConfigurator>
  );
};

export default MDPage;
