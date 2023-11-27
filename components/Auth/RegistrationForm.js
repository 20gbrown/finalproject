//RegistrationForm.js

import React, { useState } from 'react';

const RegistrationForm = ({ handleRegistration }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(username, password);
  };

  return (
    <form className="registration-container" onSubmit={handleSubmit}>
      <label className='registration-label'>
        Username:
        <input 
        className='registration-input'
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input 
        className='registration-input'
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button className='registration-button' type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
