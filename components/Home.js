//Home.js
import React from 'react';
import { useAuth } from './Auth/AuthContext.js';

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Welcome to the homepage!</h2>
      {user && <p>Hello, {user.name}! You are logged in.</p>}
    </div>
  );
};

export default Home;

  