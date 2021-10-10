import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
  const { user } = useAuth();
  return (
    <div className="home-page">
      <h2>This is home page</h2>
      {user?.email && (
        <div>
          <h5>User: {user.displayName}</h5>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Home;
