//Auth.js 
import React from 'react';
import { Route, Link, useNavigate, useRoutes, Routes} from 'react-router-dom';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import axios from 'axios'; // Import axios for HTTP requests

const Auth = () => {
  const navigate = useNavigate();

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

  // Handle Login
  const handleLogin = (username, password) => {
    axios.post('/api/auth/login', { username, password })
      .then(response => {
        console.log(response.data.message);
        navigate('/');
      })
      .catch(error => {
        console.error(error.response.data.message);
        // Handle login failure (display error message, etc.)
      });
  };

  return (
    <div>
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
