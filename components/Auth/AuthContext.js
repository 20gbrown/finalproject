// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({ id: '', username: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/user');
        const userData = response.data;
        setAuthenticated(true);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
        setAuthenticated(false);
        setUser({ id: '', username: '' });
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []); // Empty dependency array to run only once when the component mounts

  const login = (userData) => {
    // Perform your authentication logic (e.g., set tokens, sessions)
    setAuthenticated(true);
    setUser(userData);
  };

  const logout = async () => {
    // Perform logout logic (e.g., clear tokens, sessions)
    try {
      await axios.post('/api/auth/logout');
      setAuthenticated(false);
      setUser({ id: '', username: '' });
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ authenticated, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)
