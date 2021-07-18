import './App.scss';
import MyInput from './Components/MyInput/MyInput.jsx';
import CombinedInputs from './Components/CombinedInputs/CombinedInputs';
import { useSelector } from 'react-redux';
import CustomButton from './Components/CustomButton/CustomButton';

function App() {
  const vcbState = useSelector(state => state.vcb);

  return (
    <div>
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
        <CustomButton></CustomButton>
      </CombinedInputs>
    </div>
  );
}

export default App;
