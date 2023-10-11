import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './slice/dragons/DragonSlice';
import rocketReducer from './slice/rockets/RocketSlice';

const store = configureStore({
  reducer: {
    dragon: dragonReducer,
    rocket: rocketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
