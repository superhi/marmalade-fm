import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const Header = props => (
  <header className="black mb5 pt5">
    <h1 className="ttu f3 tracked-mega anton tc mt0 mb3">Marmalade.fm</h1>
    <ul className="list flex justify-center pl0">
      <li className="mh2">
        {/* we use NavLink to give us active styles when we’re on the current page */}
        {/* using the exact prop makes sure it matches exactly */}
        <NavLink exact to="/" className="nav-link link biryani-black f6 ttu gray">
          What’s hot
        </NavLink>
      </li>
      <li className="mh2">
        <NavLink to="/archive" className="nav-link link biryani-black f6 ttu gray">
          Archive
        </NavLink>
      </li>
      <li className="mh2">
        <NavLink to="/about" className="nav-link link biryani-black f6 ttu gray">
          About
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
