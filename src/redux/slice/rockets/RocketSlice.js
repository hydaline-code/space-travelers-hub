


// const dispatch = useDispatch();

//   useEffect(() => {
//     async function fetchRockets() {
//       try {
//         const response = await fetch('https://api.spacexdata.com/v3/rockets');
//         const data = await response.json();
//         const rocketsData = data.map((rocket) => ({
//           id: rocket.rocket_id,
//           name: rocket.rocket_name,
//           type: rocket.rocket_type,
//           description: rocket.description, 
//           flickr_images: rocket.flickr_images,
//         }));
//         dispatch(setRockets(rocketsData));
//       } catch (error) {
//         console.error('Error fetching rockets data:', error);
//       }
//     }

//     fetchRockets();
//   }, [dispatch]);


// const rocketSlice = createSlice({
//   name: 'rocket',
//   initialState: [],
//   reducers: {
//     setRockets: (state, action) => action.payload,
//     reserveRocket: (state, action) => {
//       const rocketId = action.payload;
//       return state.map((rocket) => (rocket.id !== rocketId ? rocket : { ...rocket, reserved: !rocket.reserved }));
//     },
//     cancelReservation: (state, action) => {
//         const rocketId = action.payload;
//         return state.map((rocket) => (rocket.id !== rocketId ? rocket : { ...rocket, reserved: false }))
//     },
//   },
// });

// export const { setRockets, reserveRocket, cancelReservation } = rocketSlice.actions;
// export default rocketSlice.reducer;

// rocketSlice.js


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
//   try {
//     const response = await fetch('https://api.spacexdata.com/v3/rockets');
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     return data
//   } catch (error) {
//     throw error;
//   }
// });



// const rocketSlice = createSlice({
//   name: 'rocket',
//   initialState: [],
//   reducers: {
//     setRockets: (state, action) => action.payload,
//     reserveRocket: (state, action) => {
//       const rocketId = action.payload;
//       return state.map((rocket) => (rocket.id !== rocketId ? rocket : { ...rocket, reserved: !rocket.reserved }));
//     },
//     cancelReservation: (state, action) => {
//         const rocketId = action.payload;
//         return state.map((rocket) => (rocket.id !== rocketId ? rocket : { ...rocket, reserved: false }))
//     },
//   },
// });

// export const { setRockets, reserveRocket, cancelReservation } = rocketSlice.actions;
// export default rocketSlice.reducer;


// const rocketSlice = createSlice({
//   name: 'rocket',
//   initialState: [],
//   reducers: {
//     setRockets: (state, action) => action.payload,
//     reserveRocket: (state, action) => {
//       const rocketId = action.payload;
//       return state.map((rocket) => (rocket.id !== rocketId ? rocket : { ...rocket, reserved: !rocket.reserved }));
//     },
//     cancelReservation: (state, action) => {
//       const rocketId = action.payload;
//       return state.map((rocket) => (rocket.id !== rocketId ? rocket : { ...rocket, reserved: false }));
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchRockets.fulfilled, (state, action) => {
//       return action.payload;
//     });
//   },
// });

// export const { setRockets, reserveRocket, cancelReservation } = rocketSlice.actions;
// export default rocketSlice.reducer;

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// const apiURL = 'https://api.spacexdata.com/v4/rockets';
// //const apiURL = 'https://api.spacexdata.com/v4/dragons';

// const initialState = {
//   rockets: [],
//   loading: false,
//   error: '',
// };

// export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
//   try {
//     const response = await fetch(apiURL);
//     if (! response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     return data.map((rocket) => ({
//       id: rocket.rocket_id,
//       name: rocket.rocket_name,
//       type: rocket.rocket_type,
//       description: rocket.description,
//       flickr_images: rocket.flickr_images,
//       reserved: false,
//     }));
//   } catch (error) {
//     throw error;
//   }
// });

// const rocketSlice = createSlice({
//   name: 'rocket',
//   initialState,
//   reducers: {
//     reserveRocket: (state, action) => {
//       state.rockets = state.rockets.map((rocket) => {
//         if (rocket.id === action.payload) {
//           return { ...rocket, reserved: true };
//         }
//         return rocket;
//       });
//     },
//     cancelReservation: (state, action) => {
//       state.rockets = state.rockets.map((rocket) => {
//         if (rocket.id === action.payload) {
//           return { ...rocket, reserved: false };
//         }
//         return rocket;
//       });
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchRockets.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchRockets.fulfilled, (state, action) => {
//         state.rockets = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchRockets.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { reserveRocket, cancelReservation } = rocketSlice.actions;
// export default rocketSlice.reducer;


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
