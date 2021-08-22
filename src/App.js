import './App.scss';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';

import LDPage from './Pages/LD breaker page/LDPage';
import MDPage from './Pages/MD breaker page/MDPage';
import MyInput from './Components/MyInput/MyInput.jsx';
import CombinedInputs from './Components/CombinedInputs/CombinedInputs';
import CustomButton from './Components/CustomButton/CustomButton';
import VCBImages from './Components/VCBImages/VCBImages';
import { clear } from './Store/LDvcbSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const vcbState = useSelector(state => state.LDvcb);
  const clearFields = () => {
    dispatch(clear());
  };
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route path='/LD'>
            <LDPage></LDPage>
          </Route>
          <Route path='/MD'>
            <MDPage></MDPage>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
