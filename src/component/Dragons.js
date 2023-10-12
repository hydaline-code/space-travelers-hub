import React from 'react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import dragonReducer from '../redux/slice/dragons/DragonSlice';

const Dragons = () => (
  <h1>Hello from dragons</h1>
);
// const dragons = useSelector((state) => state.dragons.data);
// const loading = useSelector((state) => state.Dragons.loading);
// const error = useSelector((state) => state.Dragons.error);
// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(dragonReducer());
// }, [dispatch]);
// return (
//   <div>
//     <h1>Hello from Dragons</h1>
//     {loading ? (
//       <p>Loading...</p>
//     ) : error ? (
//       <p>
//         Error:
//         {error}
//       </p>
//     ) : (
//       <div>
//         <h2>Dragon Data:</h2>
//         <ul>
//           {dragons.map((dragon) => (
//             <li key={dragon.id}>{dragon.name}</li>
//           ))}
//         </ul>
//       </div>
//     )}
//   </div>
// );

export default Dragons;
