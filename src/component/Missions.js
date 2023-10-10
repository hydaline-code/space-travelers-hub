
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/slice/MissionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  console.log('Missions in component:', missions);

  return (
    <div className='missions-container'>
      <h2>Missions</h2>
      {Array.isArray(missions) ? (
        missions.map((mission) => (
          <div key={mission.mission_id}>
            <h3>{mission.mission_name}</h3>
            <p>{mission.description}</p>
          </div>
        ))
      ) : (
        <h4 className='no-fetch'>No missions data available.</h4>
      )}
    </div>
  );


};
export default Missions;

