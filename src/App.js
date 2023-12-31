import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rockets from './component/Rockets';
import Dragons from './component/Dragons';
import Missions from './component/Missions';
import Profile from './component/Profile';
import Navigation from './component/Navigation';


function App() {
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
