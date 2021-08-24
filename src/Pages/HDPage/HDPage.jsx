import React from 'react';
import { clear } from '../../Store/HDvcbSlice';
import { useSelector, useDispatch } from 'react-redux';
import { changed } from '../../Store/HDvcbSlice';
import VCBConfigurator from '../../Components/VCBConfigurator/VCBConfigurator';

const HDPage = () => {
  const dispatch = useDispatch();
  const HDvcbState = useSelector(state => state.HDvcb);
  const clearFields = () => {
    dispatch(clear());
  };

  return (
    <VCBConfigurator
      clearFields={clearFields}
      vcbState={HDvcbState}
      imageUrl={'/img/HDbreaker.png'}
      changed={changed}
    ></VCBConfigurator>
  );
};

export default HDPage;
