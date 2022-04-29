import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <header>
    <div>
      <div>Bookstore CMS</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Nav;
