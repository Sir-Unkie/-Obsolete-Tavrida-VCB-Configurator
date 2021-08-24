import React from 'react';
import { clear } from '../../Store/MDvcbSlice';
import { useSelector, useDispatch } from 'react-redux';
import { changed } from '../../Store/MDvcbSlice';
import VCBConfigurator from '../../Components/VCBConfigurator/VCBConfigurator';

const MDPage = () => {
  const dispatch = useDispatch();
  const MDvcbState = useSelector(state => state.MDvcb);
  const clearFields = () => {
    dispatch(clear());
  };

  return (
    <VCBConfigurator
      CodeTemplate={'LD'}
      clearFields={clearFields}
      vcbState={MDvcbState}
      imageUrl={'/img/MDbreaker.png'}
      changed={changed}
    ></VCBConfigurator>
  );
};

export default MDPage;
