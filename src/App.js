import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rockets from './components/Rockets';
import Dragons from './components/Dragons';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dragons" element={<Dragons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
