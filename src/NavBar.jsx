import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar" aria-label="navigation">
      <ul className="nav-links">
        <li>
          <Link className="link" to="/home">Home</Link>
        </li>
        <li>
          <Link className="link" to="/about">About</Link>
        </li>
        <li>
          <Link className="link" to="/service">Service</Link>
        </li>
        <li>
          <Link className="link" to="/product">Product</Link>
        </li>
        <li>
          <Link className="link" to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
