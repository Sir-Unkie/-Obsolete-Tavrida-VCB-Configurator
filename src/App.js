import './App.scss';
import { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userChanged } from './Store/UserSlice';

import LDPage from './Pages/LD breaker page/LDPage';
import MDPage from './Pages/MD breaker page/MDPage';
import WelcomePage from './Pages/WelcomePage/WelcomePage';

import Header from './Components/Header/Header';

import { auth } from './Firebase/firebase.utils';
import SignInSignUpPage from './Pages/WelcomePage/SignInSignUpPage/SignInSignUpPage';

function App() {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.User);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      if (user !== null) {
        dispatch(userChanged(user.displayName));
        localStorage.setItem('user', user.displayName);
      }
    });
    return () => {
      unsubscribeFromAuth();
      localStorage.clear();
    };
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className='app'>
        <Header></Header>
        <Switch>
          <Route path='/' exact>
            <WelcomePage></WelcomePage>
          </Route>
          <Route path='/SignIn'>
            {!userState && <SignInSignUpPage></SignInSignUpPage>}
          </Route>
          <Route path='/LD'>
            {userState && <LDPage />}
            {!userState && <Redirect to='/'></Redirect>}
          </Route>
          <Route path='/MD'>
            {userState && <MDPage />}
            {!userState && <Redirect to='/'></Redirect>}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
