import './App.scss';
import { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userChanged } from './Store/UserSlice';

import LDPage from './Pages/LD breaker page/LDPage';
import MDPage from './Pages/MD breaker page/MDPage';
import HDPage from './Pages/HDPage/HDPage';
import WelcomePage from './Pages/WelcomePage/WelcomePage';

import Header from './Components/Header/Header';

import { auth } from './Firebase/firebase.utils';
import SignInSignUpPage from './Pages/WelcomePage/SignInSignUpPage/SignInSignUpPage';

// /////////////////////////////////////////////////////////////////////////

// prepare the images (right aspect ration and compressed png)
// Make SignIn page responsive and styled the correct way
// make tavrida electric to be a logo
// fix the netlify issue

// //////////////////////////////////////////////////////////////////////////

function App() {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.User);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      if (user !== null) {
        console.log(user);
        dispatch(
          userChanged({
            displayName: user.displayName,
            email: user.email,
          })
        );
        localStorage.setItem('user', user.displayName);
        localStorage.setItem('email', user.email);
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
          <Route path='/HD'>
            {userState && <HDPage />}
            {!userState && <Redirect to='/'></Redirect>}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
