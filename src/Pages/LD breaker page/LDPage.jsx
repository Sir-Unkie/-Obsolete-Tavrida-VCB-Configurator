import React from 'react';
import { clear } from '../../Store/LDvcbSlice';
import { useSelector, useDispatch } from 'react-redux';
import { changed } from '../../Store/LDvcbSlice';
import VCBConfigurator from '../../Components/VCBConfigurator/VCBConfigurator';

const LDPage = () => {
  const dispatch = useDispatch();
  const LDvcbState = useSelector(state => state.LDvcb);
  const clearFields = () => {
    dispatch(clear());
  };

  return (
    <VCBConfigurator
      CodeTemplate={'LD'}
      clearFields={clearFields}
      vcbState={LDvcbState}
      imageUrl={'/img/LDCrossSection.png'}
      changed={changed}
    ></VCBConfigurator>
  );
};

export default LDPage;
