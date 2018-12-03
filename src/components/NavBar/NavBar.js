import React from 'react';
import { NavLink } from 'react-router-dom';
import { TYPE_STORIES } from '../../api';

const NavBar = () => (
<ul>
  <li>
    <NavLink to={`/${TYPE_STORIES.NEW}`}>New</NavLink>
  </li>
  <li>
    <NavLink to={`/${TYPE_STORIES.TOP}`}>Top</NavLink>
  </li>
  <li>
    <NavLink to={`/${TYPE_STORIES.BEST}`}>Best</NavLink>
  </li>
  <li>
    <NavLink to={`/${TYPE_STORIES.ASK}`}>Ask</NavLink>
  </li>
  <li>
    <NavLink to={`/${TYPE_STORIES.SHOW}`}>Show</NavLink>
  </li>
  <li>
    <NavLink to={`/${TYPE_STORIES.JOB}`}>Job</NavLink>
  </li>
  <li>
    <NavLink to='/about'>About Us</NavLink>
  </li>
</ul>
);

export default NavBar;
