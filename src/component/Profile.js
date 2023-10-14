
import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dragons = useSelector((state) => state.dragons.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved !== false);
  const joinedMissions = missions.filter((mission) => mission.reserved);
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = useSelector((state) => state.rockets.rockets.filter((rocket) => rocket.reserved));


  return (
    <div className="profile-container">
      <section>
        <div className="Rockets">
          <h2>My Rockets</h2>
          <ul className="reserved-list">
          {reservedRockets.map((rocket) => (
  <li key={rocket.id} className="reserved-item">
    <div className="reserved-details">
      <p>{rocket.rocket_name}</p>
    </div>
  </li>
))}
          </ul>
        </div>
      </section>
      <section>
        <div className="Rockets">
          <h2>My Missions</h2>
          <ul className="reserved-list">
            {joinedMissions.map((mission) => (
              <li key={mission.mission_id} className="reserved-item">
                <p>{mission.mission_name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div className="Rockets">
          <h2>My Dragons</h2>
          <ul className="reserved-list">
            {reservedDragons.map((dragon) => (
              <li key={dragon.id} className="reserved-item">
                <p>{dragon.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Profile;

