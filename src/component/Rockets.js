import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/slice/rockets/RocketSlice';
import './styles/Rockets.css';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const handleReserveRocket = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

  const handleCancelReservation = (rocketId) => {
    console.log('Cancelling reservation for rocket ID:', rocketId);
    dispatch(cancelReservation(rocketId));
  };

  return (
    <div>
      <ul className="rocket-list">
        {rockets.map((rocket) => (
          <li key={rocket.id} className="rocket-item">
            <img src={rocket.flickr_images[0]} alt={rocket.name} className="rocket-image" />
            <div className="rocket-details">
              <h3>{rocket.name}</h3>
              {rocket.reserved ? (
                <div>
                  <p className="description"><span className="reserved-description">Reserved</span>{ rocket.description }</p>
                  < button 
                    className="cancel-button"
                    onClick={() => handleCancelReservation(rocket.id)}
                  >
                    Cancel Reservation
                  </button>
                </div>
              ) : (
                  <div>
                    <p className='description'>{rocket.description}</p>
                    <button
                      className="reserve-button"
                      onClick={() => handleReserveRocket(rocket.id)}
                    >
                      Reserve Rocket
                    </button>
                  </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rockets;