import { configureStore } from "@reduxjs/toolkit";
import missionReducer from "./slice/MissionsSlice";

const store = configureStore({
  reducer: {
    missions: missionReducer,
  },
});

export default store;
