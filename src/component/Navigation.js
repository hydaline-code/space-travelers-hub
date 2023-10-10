import React from 'react';
import {NavLink} from 'react-router-dom';
function Navigation() {
  return (
    <div>
      <div className="Navbar">
        <div className="logo">
          <img src="planet.png" style={{width: '50px', height: '50px'}} alt="" />
          <h1>Space Travelers&apos; Hub</h1>
        </div>
        <div className="nav-links" />
        <NavLink
          to="/Rockets"
          className="view"
          style={({isActive}) => ({
            textDecoration: isActive ? 'underline' : '',
            color: isActive ? 'blue' : '',
          })}
        >
          Rockets
        </NavLink>
        <NavLink
          to="/Missions"
          className="view"
          style={({isActive}) => ({
            textDecoration: isActive ? 'underline' : '',
            color: isActive ? 'blue' : '',
          })}
        >
          Missions
        </NavLink>
        <NavLink
          to="/Dragons"
          className="view"
          style={({isActive}) => ({
            textDecoration: isActive ? 'underline' : '',
            color: isActive ? 'blue' : '',
          })}
        >
          Dragons
        </NavLink>
        <NavLink
          to="/Profile"
          className="view-profile"
          style={({isActive}) => ({
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