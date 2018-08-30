import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <ul className='nav mb-3'>
    <li className='nav-item'>
      <NavLink className='nav-link active' to='/'>Hacker News</NavLink>
    </li>
    <li className='nav-item'>
      <NavLink className='nav-link' to='/about_us'>About Us</NavLink>
    </li>
  </ul>
);

export default NavBar;
