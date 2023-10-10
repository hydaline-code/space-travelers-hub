
import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export const { setMissions, setLoading, setError } = missionsSlice.actions;

export const fetchMissions = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    // Fetch missions data
    const response = await fetch('https://api.spacexdata.com/v3/missions');

    if (!response.ok) {
      throw new Error('Network response failed');
    }

    const data = await response.json();

    // Convert the response object into an array
    const missionData = Object.values(data);
    // Dispatch the action to set missions data
    dispatch(setMissions(missionData));
  } catch (error) {
    
    dispatch(setError(error.message));
  }
};

export default missionsSlice.reducer;
