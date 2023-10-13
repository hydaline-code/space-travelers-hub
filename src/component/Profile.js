import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dragons = useSelector((state) => state.dragons.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved !== false);
  const joinedMissions = missions.filter((mission) => mission.reserved);

  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="profile-container">
      <section>
      <div className="Rockets">
        <h2>My Rockets</h2>
        <ul className="reserved-list">
          {reservedRockets.map((rocket) => (
            <li key={rocket.id} className="reserved-item">
              <div className="reserved-details">
                <p>{rocket.name}</p>
                {/* <p className="description">{rocket.description}</p> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
     <section>
      <div className="mission-container">
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
      </section>
      <section>
        <h2>Dragons</h2>
        <div className="columns">
          <div className="column">
            <ul className="list-group">
              {
                reservedDragons.map((dragon) => (
                  <li key={dragon.id} className="list-group-item">
                    {dragon.name}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
