import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Rockets.css';

function Rockets() {
  const rockets = useSelector((state) => state.rocket);

  return (
    <div>
      <div className="rocket-container">
        {rockets.map((rocket) => (
          <div key={rocket.id} className="rocket-elements">
            <img src={rocket.flickr_images[0]} alt={rocket.name} className="rocket-image" />
            <div className="rocket-details">
              <h3>{rocket.name}</h3>
              <p>
                Type:
                {rocket.type}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rockets;
