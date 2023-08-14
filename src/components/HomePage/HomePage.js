import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <h1 className="title">Welcome to the Health Survey Portal</h1>
      <p className="description">Select a survey to begin:</p>
      <div className="button-container">
        <Link to="/general-survey">
          <button className="button">General Survey</button>
        </Link>
        <Link to="/women-survey">
          <button className="button">Women's Survey</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
