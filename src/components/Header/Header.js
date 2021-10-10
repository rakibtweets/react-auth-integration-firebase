import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header d-flex justify-content-center bg-dark p-2">
      <Link className="nav-link menu-list" to="/home">
        Home
      </Link>
      <Link className="nav-link menu-list" to="/shipping">
        Shipping
      </Link>
      <Link className="nav-link menu-list" to="/register">
        Register
      </Link>
      <Link className="nav-link  menu-list" to="/login">
        Login
      </Link>
      {user?.email && (
        <button onClick={logOut} className="btn  menu-list">
          Log Out
        </button>
      )}
    </div>
  );
};

export default Header;
