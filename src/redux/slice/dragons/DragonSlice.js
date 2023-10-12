import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiURL = 'https://api.spacexdata.com/v4/dragons';

const initialState = {
  dragons: [],
  loading: false,
  error: '',
};

export const getDragon = createAsyncThunk('dragons/getdragons', async () => {
  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const DragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {
    reserveDragon: (state, action) => ({
      ...state,
      dragons: state.dragons.map((dragon) => {
        if (dragon.id === action.payload) {
          return { ...dragon, reserved: true };
        }
        return dragon;
      }),
    }),
    cancelDragon: (state, action) => ({
      ...state,
      dragons: state.dragons.map((dragon) => {
        if (dragon.id === action.payload) {
          return { ...dragon, reserved: false };
        }
        return dragon;
      }),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDragon.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDragon.fulfilled, (state, action) => {
        state.dragons = action.payload.map((dragon) => ({
          id: dragon.id,
          name: dragon.name,
          description: dragon.description,
          flickr_images: dragon.flickr_images[0],
          reserved: false,
        }));
        state.loading = false;
      })
      .addCase(getDragon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default DragonSlice.reducer;
export const { reserveDragon, cancelDragon } = DragonSlice.actions;
