import React from "react";
import { NavLink } from 'react-router-dom';

const Navigation= () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/rockets">Rockets</NavLink>
        </li>
        <li>
        <NavLink to="/missions">Missions</NavLink>
        </li>
        <li>
        <NavLink to="/myProfile">My profile</NavLink>
        </li>
        <li>
        <NavLink to="/dragon">Dragon</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
