//Auth.js 
import React from 'react';
import { Route, Link} from 'react-router-dom';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const Auth = () => {
    let {path, url } = useRouteMatch();
// Registration
const handleRegistration = (username, password) => {
  axios.post('/api/auth/register', { username, password })
    .then(response => {
      console.log(response.data.message);
    })
    .catch(error => {
      console.error(error.response.data.message);
    });
};

// Login
const handleLogin = (username, password) => {
  axios.post('/api/auth/login', { username, password })
    .then(response => {
      console.log(response.data.message);
    })
    .catch(error => {
      console.error(error.response.data.message);
    });
};

return (
    <div>
      <h1>Authentication</h1>
      <nav>
        <ul>
          <li>
            <Link to={`${url}/login`}>Login</Link>
          </li>
          <li>
            <Link to={`${url}/register`}>Register</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path={`${path}/login`}>
          {/* Pass the login handling function to LoginForm */}
          <LoginForm handleLogin={handleLogin} />
        </Route>
        <Route path={`${path}/register`}>
          {/* Pass the registration handling function to RegistrationForm */}
          <RegistrationForm handleRegistration={handleRegistration} />
        </Route>
      </Switch>
    </div>
  );
};

export default Auth;
