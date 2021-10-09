import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header d-flex justify-content-center bg-dark p-2">
      <Link className="nav-link menu-list" to="/home">
        Home
      </Link>
      <Link className="nav-link menu-list" to="/register">
        Register
      </Link>
      <Link className="nav-link  menu-list" to="/login">
        Login
      </Link>
    </div>
  );
};

export default Header;
