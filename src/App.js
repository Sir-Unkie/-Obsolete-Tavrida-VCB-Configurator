import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import MyInput from './Components/MyInput/MyInput.jsx';
import CombinedInputs from './Components/CombinedInputs/CombinedInputs';
import CustomButton from './Components/CustomButton/CustomButton';
import VCBImages from './Components/VCBImages/VCBImages';
import { clear } from './Store/LDvcbSlice';

function App() {
  const dispatch = useDispatch();
  const vcbState = useSelector(state => state.LDvcb);
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
        <div className='buttonsContainer'>
          <CustomButton>Make an order</CustomButton>
          <CustomButton inverted={true} clickHandler={clearFields}>
            Clear
          </CustomButton>
        </div>
      </CombinedInputs>
      <VCBImages></VCBImages>
    </div>
  );
}

export default App;
