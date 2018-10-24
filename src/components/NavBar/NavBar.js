import React from 'react';
import { NavLink } from 'react-router-dom';
import { typeStories } from '../../api';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <button className="navbar-toggler"
            type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {/* <li className="nav-item">
          <NavLink className='nav-link text-white' to={`/${typeStories.NEW}`}>New</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link text-white' to={`/${typeStories.TOP}`}>Top</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link text-white' to={`/${typeStories.BEST}`}>Best</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link text-white' to={`/${typeStories.ASK}`}>Ask</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link text-white' to={`/${typeStories.SHOW}`}>Show</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link text-white' to={`/${typeStories.JOB}`}>Job</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className='nav-link text-white' to='/about'>About Us</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
