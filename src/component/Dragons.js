import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getDragon, reserveDragon, cancelDragon } from '../redux/slice/dragons/DragonSlice';
import './styles/Dragons.css';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons.dragons);

  useEffect(() => {
    if (!dragons || !dragons.length) {
      dispatch(getDragon());
    }
  }, [dispatch, dragons]);

  return (
    <div className="dragons_container">
      <h1>Dragons</h1>
      <ul className="dragons-list">
        {
        dragons && dragons.map((dragon) => (
          <li className="dragon-item" key={dragon.id}>
            <div className="img-container">
              <img src={dragon.flickr_images} alt="" className="dragon-img" />
            </div>
            <div className="content-container">
              <h2 className="rocket-title">{dragon.name}</h2>
              <p className="rocket-des">
                {dragon.reserved && <span className="reserved-tag">Reserved</span>}
                {dragon.description}
              </p>
              {!dragon.reserved && (
                <button type="button" className="reserve-rocket" onClick={() => dispatch(reserveDragon(dragon.id))}>
                  Reserve Dragon
                </button>
              )}
              {dragon.reserved && (
                <button type="button" className="cancel-reserve" onClick={() => dispatch(cancelDragon(dragon.id))}>
                  Cancel Reservation
                </button>
              )}
            </div>
          </li>
        ))
      }
      </ul>
    </div>
  );
};

export default Dragons;
