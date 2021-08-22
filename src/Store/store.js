import { configureStore } from '@reduxjs/toolkit';
import LDvcbReducer from './LDvcbSlice';
import MDvcbReducer from './MDvcbSlice';

export const store = configureStore({
  reducer: {
    LDvcb: LDvcbReducer,
    MDvcb: MDvcbReducer,
  },
});
