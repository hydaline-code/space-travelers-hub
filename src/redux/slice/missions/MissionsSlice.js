
import { createSlice } from '@reduxjs/toolkit';

export const fetchMissions = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch('https://api.spacexdata.com/v3/missions');

    if (!response.ok) {
      throw new Error('Network response failed');
    }

    const data = await response.json();
    const missionData = Object.values(data);
   
    dispatch(setMissions(missionData));
  } catch (error) {
    
    dispatch(setError(error.message));
  }
};

const initialState = {
  missions: [],
  isLoading: false,
  error: null,
};

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    setMissions: (state, action) => {
      state.missions = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    joinMission: (state, action) => {
      const missionId = action.payload;
      const missionToUpdate = state.missions.find((mission) => mission.mission_id === missionId);
      if (missionToUpdate) {
        missionToUpdate.reserved = true;
      }
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      const missionToUpdate = state.missions.find((mission) => mission.mission_id === missionId);
      if (missionToUpdate) {
        missionToUpdate.reserved = false;
      }
    }    
    
  },
});

export const { setMissions, setLoading, setError, joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
