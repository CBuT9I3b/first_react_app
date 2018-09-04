import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <button className="navbar-toggler"
            type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className='nav-link text-white' to='/'>Hacker News</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link text-white' to='/favorites_news'>Favorites News</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link text-white' to='/about_us'>About Us</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;