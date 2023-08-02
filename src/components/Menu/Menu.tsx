import React, { useState } from 'react';
import './Menu.scss';

function Menu() {
  const [open, setOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Skills', 'Portfolio', 'Resume/CV']

  return (
    <header>
      <a className='logo'>Matthew Tolentino</a>
      <div
        className='menu-icon'
        onClick={() => setOpen(!open)}
        >
        <span className="material-icons">
          menu
        </span>
      </div>
      <ul className={`menu-list ${open ? 'open' : ''}`}>
        {menuItems.map(item => {
          return (
            <li key={item} onClick={() => setOpen(false)}>
              <a href="#">{item}</a>
            </li>
          )
        })}
      </ul>
    </header>
  );
}

export default Menu;
