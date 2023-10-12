import { createSlice } from '@reduxjs/toolkit';

const rocketSlice = createSlice({
  name: 'rocket',
  initialState: [],
  reducers: {
    setRockets: (state, action) => action.payload,
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      return state.map((rocket) => (rocket.id !== rocketId ? rocket : { ...rocket, reserved: !rocket.reserved }));
    },
    cancelReservation: (state, action) => {
        const rocketId = action.payload;
        return state.map((rocket) => (rocket.id !== rocketId ? rocket : { ...rocket, reserved: false }))
    },
  },
});

export const { setRockets, reserveRocket, cancelReservation } = rocketSlice.actions;
export default rocketSlice.reducer;
