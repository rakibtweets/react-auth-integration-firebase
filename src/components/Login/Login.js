import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div className="login">
      <h2>Please Log in</h2>
      <button onClick={signInWithGoogle} className="btn btn-primary my-2">
        Google Sign in
      </button>
      <br />
      <Link className="nav-link" to="/register">
        New user ?
      </Link>
    </div>
  );
};

export default Login;
