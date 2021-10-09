import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <h2>Please Log in</h2>
      <button className="btn btn-primary">Google Sign in</button>
      <br />
      <Link className="nav-link" to="/register">
        New user ?
      </Link>
    </div>
  );
};

export default Login;
