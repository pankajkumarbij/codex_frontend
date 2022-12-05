import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/reducers/counterslice';
import alertReducer from '../redux/reducers/alertslice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    alert: alertReducer
  },
});