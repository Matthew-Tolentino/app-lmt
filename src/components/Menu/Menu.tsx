import React from 'react';
import './Menu.scss';

function Menu() {
  return (
    <div className="menu">
      <span className="material-icons menu-icon">
        menu
      </span>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Resume</li>
      </ul>
    </div>
  );
}

export default Menu;
