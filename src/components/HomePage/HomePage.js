import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div>
            <Link to="/help" className="help-button">Help</Link>
<div className="homepage">
      <h1 className="title">Welcome to the Survey Screen Portal</h1>
      <p className="description">Select a survey to begin:</p>
      <div className="button-container">
        <Link to="/general-survey">
          <button className="button">Male Survey</button>
        </Link>
        <Link to="/women-survey">
          <button className="button">Female Survey</button>
        </Link>
      </div>
    </div>
    </div>
    
  );
}

export default HomePage;
