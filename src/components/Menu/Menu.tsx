import React, { useState } from 'react';
import logo from "../../imgs/_Logocrop.png";
import './Menu.scss';
import { Link } from "react-scroll";

function Menu() {
  const [open, setOpen] = useState(false);

  const menuItems = ['About', 'Skills', 'Projects', 'Resume', 'Contact']

  return (
    <header>
      <Link activeClass='active' smooth spy to='About'>
        <img className="logo" src={logo} alt="logo"></img>
      </Link>
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
            <li key={item}>
              <Link activeClass="active" smooth spy to={item}
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            </li>
          )
        })}
      </ul>
    </header>
  );
}

export default Menu;
