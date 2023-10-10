import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navigation.css';

function Navigation() {
  return (
    <div>
      <div className="navbar">
        <div className="nav-left">
          <img src="planet.png" style={{ width: '60px', height: '60px' }} alt="" />
          <h1>Space Travelers&apos; Hub</h1>
        </div>
        <div className="nav-right" />
        <NavLink
          to="/rockets"
          className="view"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : '',
            color: isActive ? 'blue' : '',
          })}
        >
          Rockets
        </NavLink>
        <NavLink
          to="/missions"
          className="view"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : '',
            color: isActive ? 'blue' : '',
          })}
        >
          Missions
        </NavLink>
        <NavLink
          to="/profile"
          className="view-profile"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : '',
            color: isActive ? 'blue' : '',
          })}
        >
          My Profile
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
