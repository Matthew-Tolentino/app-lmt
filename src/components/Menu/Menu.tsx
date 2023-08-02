import React, { useState } from 'react';
import './Menu.scss';

function Menu() {
  const [open, setOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Skills', 'Portfolio', 'Resume/CV']

  return (
    <div className="menu">
      <button
        onClick={() => setOpen(!open)}
        >
        <span className="material-icons menu-icon">
          menu
        </span>
      </button>
      <div className={`menu-list ${open ? 'open' : ''}`}>
        <ul>
          {menuItems.map(item => {
            return (
              <li key={item} onClick={() => setOpen(false)}>
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
