import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMissions, joinMission, leaveMission } from '../redux/slice/missions/MissionsSlice';
import './styles/Missions.css';

const Missions = () => {
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

  return (
    <div className="missions-container">
      <h2>Missions</h2>
      <table className="mission-list">
        <thead>
          <tr className="column-title border">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(missions) ? (
            missions.map((mission) => (
              <tr className="row-description border" key={mission.mission_id}>
                <td><h5>{mission.mission_name}</h5></td>
                <td className="description"><p>{mission.description}</p></td>
                <td className="status">
                  {mission.reserved ? <button type="button" className="badge">ACTIVE MEMBER</button> : <button type="button" className="not-member">NOT A MEMBER</button>}
                </td>
                <td className="second-btn">
                  <button
                    type="button"
                    onClick={() => handleMissionStatus(mission.mission_id, mission.reserved)}
                    className={mission.reserved ? 'leave-button' : 'join-button'}
                  >
                    {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="row-description border">
              <td colSpan="4">
                <h4 className="no-fetch">No missions data available.</h4>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

Missions.defaultProps = {
  mission: {
    mission_name: PropTypes.string.isRequired,
  },
};

export default Missions;
