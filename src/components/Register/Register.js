import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register">
      <h2>Please Register</h2>
      <form className="w-50 mx-auto">
        <input className="form-control" type="text" placeholder="Enter Email" />
        <br />
        <input
          className="form-control"
          type="password"
          placeholder="Enter Password"
        />
        <br />
        <button className="btn btn-primary mb-2" type="submit" value="submit">
          Sumit
        </button>
      </form>
      <Link to="/login">All ready registered?</Link>
    </div>
  );
};

export default Register;
