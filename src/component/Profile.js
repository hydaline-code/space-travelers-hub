import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="profile-container">
      <h2>My Missions</h2>
      <div className="columns">
        <div className="column">
          <ul className="list-group">
            {joinedMissions.map((mission) => (
              <li key={mission.mission_id} className="list-group-item">
                {mission.mission_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
