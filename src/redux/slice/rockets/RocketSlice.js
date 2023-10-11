import { createSlice } from '@reduxjs/toolkit';

const rocketSlice = createSlice({
  name: 'rocket',
  initialState: [],
  reducers: {
    setRockets: (state, action) => action.payload,
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      const newState = state.map((rocket) => (rocket.id !== rocketId ? rocket
        : { ...rocket, reserved: true }));
      console.log('New state after reserving rocket:', newState);
      return newState;
    },
  },
});

export const { setRockets, reserveRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
