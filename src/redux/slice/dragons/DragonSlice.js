// import axios from "axios";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   loading: false,
//   data: [],
//   error: '',
// }

// export const fetchDragons = createAsyncThunk('dragons/fetchDragons', () => {
//   return axios.get('https://api.spacexdata.com/v4/dragons')
//   .then(response = response.data.map(dragon => dragon))
// })

// const dragonSlice = createSlice({
//   name: 'dragons',
//   initialState,
//   extraReducers: builder => {
//     builder.addCase(fetchDragons.pending, state => {
//       state.loading = true
//     })
//     builder.addCase(fetchDragons.fulfilled, (state, action) => {
//       state.loading = false
//       state.data = action.payload
//       state.error = ""
//     })
//     builder.addCase(fetchDragons.rejected, (state, action) => {
//       state.loading = 'false'
//       state.data = []
//       state.error = action.error.message
//     })
//   }
// })

// export default dragonSlice.reducer

import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/dragons');
  return response.data.map((dragon) => dragon);
});

const dragonSlice = createSlice({
  name: 'dragons',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDragons.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDragons.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(fetchDragons.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default dragonSlice.reducer;
