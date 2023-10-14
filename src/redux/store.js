 import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './slice/dragons/DragonSlice';
import missionReducer from './slice/missions/MissionsSlice';
import rocketReducer from './slice/rockets/RocketSlice';

const store = configureStore({
  reducer: {
    dragons: dragonReducer,
    rockets: rocketReducer,
    missions: missionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
