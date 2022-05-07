import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';

const Nav = () => (
  <header className="header">
    <div className="navbar container">
      <div className="logo-nav">
        <div className="logo">Bookstore CMS</div>
        <nav>
          <ul className="nav">
            <li>
              <NavLink to="/" className="nav-link">
                Books
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories" className="nav-link">
                Categories
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="user-box">
        <IoIosPerson className="user" />
      </div>
    </div>
  </header>
);

export default Nav;
