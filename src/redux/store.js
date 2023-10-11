import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './slice/dragons/DragonSlice';

const store = configureStore({
  reducer: {
    dragon: dragonReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
