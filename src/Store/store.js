import { configureStore } from '@reduxjs/toolkit';
import vcbReducer from './vcbSlice';

export const store = configureStore({
  reducer: {
    vcb: vcbReducer,
  },
});
