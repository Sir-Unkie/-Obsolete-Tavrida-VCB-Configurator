import { configureStore } from '@reduxjs/toolkit';
import LDvcbReducer from './LDvcbSlice';
import MDvcbReducer from './MDvcbSlice';
import userReducer from './UserSlice';

export const store = configureStore({
  reducer: {
    LDvcb: LDvcbReducer,
    MDvcb: MDvcbReducer,
    User: userReducer,
  },
});
