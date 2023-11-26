// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const login = (username) => {
    // Perform your authentication logic (e.g., set tokens, sessions)
    setAuthenticated(true);
    setUsername(username);
  };

  const logout = () => {
    // Perform logout logic (e.g., clear tokens, sessions)
    setAuthenticated(false);
    setUsername('');
  };

  return (
    <AuthContext.Provider value={{ authenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
