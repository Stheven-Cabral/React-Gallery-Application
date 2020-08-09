import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink exact to='/cats' activeClassName="nav-select">Cats</NavLink></li>
        <li><NavLink exact to='/dogs' activeClassName="nav-select">Dogs</NavLink></li>
        <li><NavLink exact to='/computers' activeClassName="nav-select">Computers</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation;