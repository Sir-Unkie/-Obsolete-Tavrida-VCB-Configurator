import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import MyInput from './Components/MyInput/MyInput.jsx';
import CombinedInputs from './Components/CombinedInputs/CombinedInputs';
import CustomButton from './Components/CustomButton/CustomButton';
import VCBImages from './Components/VCBImages/VCBImages';
import { clear } from './Store/vcbSlice';

function App() {
  const dispatch = useDispatch();
  const vcbState = useSelector(state => state.vcb);
  const clearFields = () => {
    dispatch(clear());
  };
  return (
    <div className='app'>
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
        <div className='asd'>
          <CustomButton>Make an order</CustomButton>
          <CustomButton clickHandler={clearFields}>Clear</CustomButton>
        </div>
      </CombinedInputs>
      <VCBImages></VCBImages>
    </div>
  );
}

export default App;
