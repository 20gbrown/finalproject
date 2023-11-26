// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { AuthProvider } from '../components/Auth/AuthContext.js'; 
import './styles/style.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


