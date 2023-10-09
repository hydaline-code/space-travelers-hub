import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rockets from './components/rockets';
import Dragons from './components/dragons';
import Missions from './components/missions';

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myProfile" element={<myProfile />} />
        <Route path="/dragons" element={<Dragons />} />
      </Routes>
    </div>
  </Router>
);

export default App;
