import React from 'react';
import HealthSurvey from './components/HealthSurvey/HealthSurvey.js';
import ScreeningsList from './components/ScreeningsList/ScreeningsList.js';
import Footer from './components/Footer/Footer.js';
import Help from './components/Help/Help.js';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.js';
import GeneralSurvey from './components/GeneralSurvey/GeneralSurvey.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/women-survey" element={<HealthSurvey />} />
        <Route path="/general-survey" element={<GeneralSurvey />} />
        <Route path="/screenings" element={<ScreeningsList />} />
        <Route path="/help" element={<Help />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
