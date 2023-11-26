// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import FAQ from './FAQ';
import Quiz from './Quiz';
import Classes from './Classes';
import Races from './Races';
import NotFound from "./NotFound"
import LegalFooter from './LegalFooter';
import Auth from './Auth/Auth.js'
import { AuthProvider } from './Auth/AuthContext.js';

const App = () => {
  return (
    <Router>
      <AuthProvider>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/auth">Login / Register</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/races">Races</Link></li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/faq" element={<FAQ />} />
          {/* Provide an element or component prop for the /quiz route */}
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/races" element={<Races />} />
          {/* Add a catch-all route for not found */}
          <Route path="/*" element={<NotFound />} />
        </Routes>

        <LegalFooter />
      </div>
      </AuthProvider>
    </Router>
  );
};

export default App;



