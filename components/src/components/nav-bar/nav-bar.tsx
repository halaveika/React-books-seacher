import React from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.scss';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/">Cards</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
