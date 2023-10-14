import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navigation.css';

function Navigation() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src="planet.png" alt="logo" />
          <h1>Space Travelers&apos; Hub</h1>
        </div>
        <div className="nav-links">
          <NavLink to="/Rockets" className="view">Rockets</NavLink>
          <NavLink to="/Missions" className="view">Missions</NavLink>
          <NavLink to="/Dragons" className="view">Dragons</NavLink>
          <NavLink to="/Profile" className="My-profile">My Profile</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
