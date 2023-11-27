//LoginForm.js

import React, { useState } from 'react';

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <form className='login-container' onSubmit={handleSubmit}>
      <label className='login-label'>
        Username:
        <input 
        className='login-input'
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label className='login-label'>
        Password:
        <input 
        className='login-input'
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button className='login-button' type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
