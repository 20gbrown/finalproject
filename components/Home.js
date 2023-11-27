//Home.js
import React from 'react';
import { useAuth } from './Auth/AuthContext.js';
import { Link } from 'react-router-dom';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className='home-container'>
      <section className="hero-section">
        <h1>Welcome to Adventurer Crafting</h1>
        <p>Your Gateway to Dungeons & Dragons Exploration</p>
        <Link to="/quiz" className="cta-button">
          Begin Your Adventure
        </Link>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Adventurer Crafting is dedicated to helping new Dungeons & Dragons players embark on their journey into the realms of fantasy.
        </p>
      </section>

      <section className="featured-content">
        <h2>Featured Content</h2>
        <div className="featured-links">
          <Link to="/quiz" className="featured-link">Take the Quiz</Link>
          <Link to="/races" className="featured-link">Explore Races</Link>
          <Link to="/classes" className="featured-link">Exlpore Classes</Link>
          <Link to="/faq" className="featured-link">Look at Frequently Asked Questions</Link>
          <Link to="/auth" className="featured-link">Login or Register Now!</Link>
        </div>
      </section>

      <section className="user-greeting">
        <h2>Welcome, {user ? user.username: 'Adventurer'}!</h2>
        {user ? (
          <p>You are logged in. Begin your journey now!</p>
        ) : (
          <p>Join us and start your Dungeons & Dragons adventure today!</p>
        )}
      </section>
    </div>
  );
};

export default Home;


  