import React from 'react';

import { NavLink } from 'react-router-dom';
import { TYPE_STORIES } from '../../api';

const NavBar = () => (
  <div>
    <ul className='dropdown-content' id='dropdown1'>
      <li><NavLink to={`/${TYPE_STORIES.NEW}`}>New</NavLink></li>
      <li><NavLink to={`/${TYPE_STORIES.TOP}`}>Top</NavLink></li>
      <li><NavLink to={`/${TYPE_STORIES.BEST}`}>Best</NavLink></li>
    </ul>
    <div className='navbar-fixed'>
    <nav>
      <div className='nav-wrapper'>
        <ul className='left'>
          <li><a className='dropdown-trigger' data-target='dropdown1'>News</a></li>
          <li><NavLink to={`/${TYPE_STORIES.ASK}`}>Ask</NavLink></li>
          <li><NavLink to={`/${TYPE_STORIES.SHOW}`}>Show</NavLink></li>
          <li><NavLink to={`/${TYPE_STORIES.JOB}`}>Job</NavLink></li>
          <li><NavLink to='/about'>About Us</NavLink></li>
        </ul>
      </div>
    </nav>
    </div>
  </div>
);

export default NavBar;
