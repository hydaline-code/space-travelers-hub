
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../redux/slice/MissionsSlice';
import './styles/Missions.css';

const Missions = ({ mission }) => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  const handleJoinOrLeaveMission = (missionId, reserved) => {
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
      <ul className='mission-list'>
        <li className='column-title'>
          <div className='grid-container'>
            <div>Mission</div>
            <div>Description</div>
            <div>Status</div>
            <div>button</div>
          </div>
        </li>
  
        {Array.isArray(missions) ? (
          missions.map((mission) => (
            <li className='row-description' key={mission.mission_id}>
              <div className='grid-container'>
                <div><h3>{mission.mission_name}</h3></div>
                <div className='description'><p className='desc'>{mission.description}</p></div>
                <div className='status'>{mission.status}
                <button>Not a member</button></div>
                <div className='second-btn'><button onClick={() => handleJoinOrLeaveMission(mission.mission_id, mission.reserved)}>
                  {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                </button></div>
              </div>
            </li>
          ))
        ) : (
          <h4 className='no-fetch'>No missions data available.</h4>
        )}
      </ul>
    </div>
  );

};
export default Missions;






