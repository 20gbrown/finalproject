//Auth.js 
import React from 'react';
import { Route, Link, useNavigate, useRoutes, Routes} from 'react-router-dom';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import axios from 'axios'; // Import axios for HTTP requests
import {useAuth} from './AuthContext';

const Auth = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  // Handle Registration
  const handleRegistration = (username, password) => {
    axios.post('/api/auth/register', { username, password })
      .then(response => {
        console.log(response.data.message);
        navigate('/');
      })
      .catch(error => {
        console.error(error.response.data.message);
        // Handle registration failure (display error message, etc.)
      });
  };

  const handleLogin = (username, password) => {
    axios.post('/api/auth/login', { username, password })
      .then(response => {
        console.log('Server Response:', response);
  
        if (response && response.data && response.data.message) {
          console.log(response.data.message);
          const userData = response.data.user;
          login(userData);
          navigate('/');
        } else {
          console.error('Unexpected response format:', response);
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
  
        if (error.response && error.response.data && error.response.data.message) {
          console.error(error.response.data.message);
        } else {
          console.error('Unexpected error format:', error);
        }
  
        // Handle login failure (display error message, etc.)
      });
  };

  return (
    <div className="auth-container">
      <h1>Authentication</h1>
      <nav>
        <ul>
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="register">Register</Link>
          </li>
        </ul>
      </nav>

      {/* Render the LoginForm and RegistrationForm based on the route */}
      <Routes>
        <Route path="login" element={<LoginForm handleLogin={handleLogin} />} />
        <Route path="register" element={<RegistrationForm handleRegistration={handleRegistration} />} />
      </Routes>
    </div>
  );
};

export default Auth;
