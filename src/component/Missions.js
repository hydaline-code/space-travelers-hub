
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchMissions, joinMission, leaveMission } from '../redux/slice/missions/MissionsSlice';
// import './styles/Missions.css';

// const Missions = ({ mission }) => {
//   const dispatch = useDispatch();
//   const missions = useSelector((state) => state.missions.missions);

//   const handleMissionStatus = (missionId, reserved) => {
//     if (reserved) {
//       dispatch(leaveMission(missionId));
//     } else {
//       dispatch(joinMission(missionId));
//     }
//   };

//   useEffect(() => {
//     dispatch(fetchMissions());
//   }, [dispatch]);

//   console.log('Missions in component:', missions);
//   return (
//     <div className='missions-container'>
//       <h2>Missions</h2>
//       <ul className='mission-list border'>
//         <li className='column-title'>
//           <div className='grid-container'>
//             <div className=''>Mission</div>
//             <div className=''>Description</div>
//             <div className=''>Status</div>
//             <div className=''>button</div>
//           </div>
//         </li>
  
//         {Array.isArray(missions) ? (
//           missions.map((mission) => (
//             <li className=' row-description' key={mission.mission_id}>
//               <div className='grid-container '>
//                 <div><h5>{mission.mission_name}</h5></div>
//                 <div className='description line'><p className='desc'>{mission.description}</p></div>
//                 <div className='status'>{mission.status}
//                 {mission.reserved ?<button className='bagde'>Active member</button>: <button>Not a Member</button>}
//                 </div>
//                 <div className='second-btn line'><button onClick={() => handleMissionStatus(mission.mission_id, mission.reserved)}>
//                   {mission.reserved ? 'Leave Mission' : 'Join Mission'}
//                 </button></div>
//               </div>
//             </li>
//           ))
//         ) : (
//           <h4 className='no-fetch'>No missions data available.</h4>
//         )}
//       </ul>
//     </div>
//   );

// };
// export default Missions;


// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchMissions, joinMission, leaveMission } from '../redux/slice/missions/MissionsSlice';
// import './styles/Missions.css';

// const Missions = ({ mission }) => {
//   const dispatch = useDispatch();
//   const missions = useSelector((state) => state.missions.missions);

//   const handleMissionStatus = (missionId, reserved) => {
//     if (reserved) {
//       dispatch(leaveMission(missionId));
//     } else {
//       dispatch(joinMission(missionId));
//     }
//   };

//   useEffect(() => {
//     dispatch(fetchMissions());
//   }, [dispatch]);

//   console.log('Missions in component:', missions);
//   return (
//     <div className='missions-container'>
//       <h2>Missions</h2>
//       <ul className='mission-list '>
//         <li className='column-title'>
//           <div className='grid-container'>
//             <div>Mission</div>
//             <div>Description</div>
//             <div>Status</div>
//             <div>Button</div>
//           </div>
//         </li>
  
//         {Array.isArray(missions) ? (
//           missions.map((mission) => (
//             <li className='row-description border' key={mission.mission_id}>
//               <div className='grid-container'>
//                 <div><h5>{mission.mission_name}</h5></div>
//                 <div className='description'><p className='desc'>{mission.description}</p></div>
//                 <div className='status'>
//                   {mission.reserved ? <button className='badge'>Active member</button> : <button>Not a Member</button>}
//                 </div>
//                 <div className='second-btn'>
//                   <button onClick={() => handleMissionStatus(mission.mission_id, mission.reserved)}>
//                     {mission.reserved ? 'Leave Mission' : 'Join Mission'}
//                   </button>
//                 </div>
//               </div>
//             </li>
//           ))
//         ) : (
//           <li className='row-description'>
//             <h4 className='no-fetch'>No missions data available.</h4>
//           </li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Missions;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../redux/slice/missions/MissionsSlice';
import './styles/Missions.css';

const Missions = ({ mission }) => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  const handleMissionStatus = (missionId, reserved) => {
    if (reserved) {
      dispatch(leaveMission(missionId));
    } else {
      dispatch(joinMission(missionId));
    }
  };

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  console.log('Missions in component:', missions);
  return (
    <div className='missions-container'>
      <h2>Missions</h2>
      <table className='mission-list'>
        <thead>
          <tr className='column-title border'>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(missions) ? (
            missions.map((mission) => (
              <tr className='row-description border' key={mission.mission_id}>
                <td><h5>{mission.mission_name}</h5></td>
                <td className='description'><p>{mission.description}</p></td>
                <td className='status'>
                  {mission.reserved ? <button className='badge'>Active member</button> : <button>Not a Member</button>}
                </td>
                <td className='second-btn'>
                  <button onClick={() => handleMissionStatus(mission.mission_id, mission.reserved)}>
                    {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className='row-description border'>
              <td colSpan="4">
                <h4 className='no-fetch'>No missions data available.</h4>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;

