import {createSlice} from '@reduxjs/toolkit';


// const dispatch = useDispatch();

// useEffect(() => {
//   async function fetchRockets() {
//     try {
//       const response = await fetch('https://api.spacexdata.com/v3/rockets');
//       const data = await response.json();
//       const rocketsData = data.map((rocket) => ({
//         id: rocket.rocket_id,
//         name: rocket.rocket_name,
//         type: rocket.rocket_type,
//         flickr_images: rocket.flickr_images,
//       }));
//       dispatch(setRockets(rocketsData));
//     } catch (error) {
//       console.error('Error fetching rockets data:', error);
//     }
//   }

//   fetchRockets();
// }, [dispatch]);

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