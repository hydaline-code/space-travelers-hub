import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rockets from './component/Rockets';
import Dragons from './component/Dragons';
import Missions from './component/Missions';

import Profile from './component/Profile';
import Navigation from './component/Navigation';
import { setRockets } from './redux/slice/rockets/RocketSlice';
import { useDispatch } from 'react-redux';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   async function fetchRockets() {
  //     try {
  //       const response = await fetch('https://api.spacexdata.com/v3/rockets');
  //       const data = await response.json();
  //       const rocketsData = data.map((rocket) => ({
  //         id: rocket.rocket_id,
  //         name: rocket.rocket_name,
  //         type: rocket.rocket_type,
  //         flickr_images: rocket.flickr_images,
  //       }));
  //       dispatch(setRockets(rocketsData));
  //     } catch (error) {
  //       console.error('Error fetching rockets data:', error);
  //     }
  //   }

  //   fetchRockets();
  // }, [dispatch]);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/Rockets" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Dragons" element={<Dragons />} />
      </Routes>
    </Router>
  );
}

export default App;
