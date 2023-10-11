import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/slice/rockets/RocketSlice';
import './styles/Rockets.css';

function Rockets() {
  const rockets = useSelector((state) => state.rocket);
  const dispatch = useDispatch();

  const handleReserveRocket = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

  return (
    <div>
      <div className="rocket-container">
        {rockets.map((rocket) => (
          <div key={rocket.id} className="rocket-elements">
            <img src={rocket.flickr_images[0]} alt={rocket.name} className="rocket-image" />
            <div className="rocket-details">
              <h3>{rocket.name}</h3>
              {rocket.reserved ? (
                <div>
                  <p className="reserved-description">Reserved</p>
                  <p>{ rocket.description }</p>
                </div>
              ) : (
                <p>{ rocket.description }</p>
              )}
              <button
                type="button"
                className="reserve-btn"
                onClick={() => handleReserveRocket(rocket.id)}
                disabled={rocket.reserved}
              >
                {rocket.reserved ? 'Cacel Reservation' : 'Reserve Rocket'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rockets;
