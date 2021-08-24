import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('user')
  ? {
      displayName: localStorage.getItem('user'),
      email: localStorage.getItem('email'),
    }
  : null;

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    userChanged: (state, action) => {
      return (state = {
        displayName: action.payload.displayName,
        email: action.payload.email,
      });
    },
    userClear: state => {
      return null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userChanged, userClear } = userSlice.actions;

export default userSlice.reducer;
