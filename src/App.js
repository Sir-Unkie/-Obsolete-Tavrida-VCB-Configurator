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
        {Object.keys(fields).map(key => {
          return (
            <MyInput
              key={key}
              options={fields[key].options}
              parName={key}
            ></MyInput>
          );
        })}
      </CombinedInputs>
    </div>
  );
}

export default App;
