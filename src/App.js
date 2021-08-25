import './App.scss';

import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userChanged } from './Store/UserSlice';

// import LDPage from './Pages/LD breaker page/LDPage';
// import MDPage from './Pages/MD breaker page/MDPage';
// import HDPage from './Pages/HDPage/HDPage';
// import WelcomePage from './Pages/WelcomePage/WelcomePage';
// import SignInSignUpPage from './Pages/WelcomePage/SignInSignUpPage/SignInSignUpPage';

import Header from './Components/Header/Header';
import SuspenseSpinner from './Components/SuspenseSpinner/SuspenseSpinner';
import { auth } from './Firebase/firebase.utils';

const LDPage = React.lazy(() => import('./Pages/LD breaker page/LDPage'));
const MDPage = React.lazy(() => import('./Pages/MD breaker page/MDPage'));
const HDPage = React.lazy(() => import('./Pages/HDPage/HDPage'));
const WelcomePage = React.lazy(() => import('./Pages/WelcomePage/WelcomePage'));
const SignInSignUpPage = React.lazy(() =>
  import('./Pages/WelcomePage/SignInSignUpPage/SignInSignUpPage')
);
// /////////////////////////////////////////////////////////////////////////

// prepare the images (right aspect ration and compressed png)
// make a mobile navbar
// make tel ico for browser tab
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
            <Suspense fallback={<SuspenseSpinner />}>
              <WelcomePage></WelcomePage>
            </Suspense>
          </Route>
          <Route path='/SignIn'>
            {!userState && (
              <Suspense fallback={<SuspenseSpinner />}>
                <SignInSignUpPage></SignInSignUpPage>
              </Suspense>
            )}
          </Route>
          <Route path='/LD'>
            {userState && (
              <Suspense fallback={<SuspenseSpinner />}>
                <LDPage />
              </Suspense>
            )}
            {!userState && <Redirect to='/'></Redirect>}
          </Route>
          <Route path='/MD'>
            {userState && (
              <Suspense fallback={<SuspenseSpinner />}>
                <MDPage />
              </Suspense>
            )}
            {!userState && <Redirect to='/'></Redirect>}
          </Route>
          <Route path='/HD'>
            {userState && (
              <Suspense fallback={<SuspenseSpinner />}>
                <HDPage />
              </Suspense>
            )}
            {!userState && <Redirect to='/'></Redirect>}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
