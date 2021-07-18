import './App.scss';
import MyInput from './Components/MyInput.jsx';
import { fields } from './assets/Initial Data';
import CombinedInputs from './Components/CombinedInputs/CombinedInputs';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const vcbState = useSelector(state => state.vcb);

  return (
    <div className='ppp'>
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
      </CombinedInputs>
    </div>
  );
}

export default App;
