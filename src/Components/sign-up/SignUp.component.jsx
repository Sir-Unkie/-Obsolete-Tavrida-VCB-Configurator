import React, { useState } from 'react';
import './SignUp.styles.scss';
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import { auth } from '../../Firebase/firebase.utils';

import { useDispatch } from 'react-redux';
import { userChanged } from '../../Store/UserSlice';

const SignUp = props => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const submitHandler = async e => {
    e.preventDefault();
    document.activeElement.blur();
    // console.log('submitHandler');
    if (userData.password !== userData.confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        userData.email,
        userData.password
      );
      userCredential.user.updateProfile({
        displayName: userData.displayName,
      });
      dispatch(userChanged(userData.displayName));
      localStorage.setItem('user', userData.displayName);
      setUserData({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const changeHandler = e => {
    // console.log('changeHandler');
    setUserData(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className='sign-up'>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={submitHandler}>
        <FormInput
          type='text'
          name='displayName'
          label='Display name'
          value={userData.displayName}
          required
          id='DI1'
          onChange={changeHandler}
        ></FormInput>
        <FormInput
          type='email'
          name='email'
          label='Email'
          value={userData.email}
          required
          id='EI1'
          onChange={changeHandler}
        ></FormInput>
        <FormInput
          type='password'
          name='password'
          label='Password'
          value={userData.password}
          required
          id='PI1'
          onChange={changeHandler}
        ></FormInput>
        <FormInput
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          value={userData.confirmPassword}
          required
          id='CPI1'
          onChange={changeHandler}
        ></FormInput>
        <CustomButton type='submit'>Create an account</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
