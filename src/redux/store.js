import { configureStore } from "@reduxjs/toolkit";
import missionReducer from "./slice/missions/MissionsSlice";

const store = configureStore({
  reducer: {
    missions: missionReducer,
  },
});

export default store;
