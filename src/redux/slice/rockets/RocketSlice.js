
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiURL = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
  loading: false,
  error: '',
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.map((rocket) => ({
      id: rocket.id,
      rocket_name: rocket.name,
      description: rocket.description,
      flickr_images: rocket.flickr_images,
      reserved: false,
    }));
  } catch (error) {
    throw error;
  }
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
    },
    cancelReservation: (state, action) => {
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.rockets = action.payload;
        state.loading = false;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default rocketSlice.reducer;
export const { reserveRocket, cancelReservation } = rocketSlice.actions;
