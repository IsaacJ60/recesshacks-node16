import React from 'react';
import { Link } from 'react-router-dom';
import './ScreeningsList.css'; 

const ScreeningsList = () => {
  const screenings = [
    { id: 1, name: 'Blood Pressure', frequency: 'Annual', description: 'Annual blood pressure check' },
    { id: 2, name: 'Cholesterol', frequency: 'Every 5 years', description: 'Cholesterol level screening' },
  ];

  return (
    <div className="screenings-container">
      <h2 className="screenings-header">Recommended Screenings</h2>
      <div className="screenings-grid">
        {screenings.map(screening => (
          <Link to={`/screenings/${screening.id}`} key={screening.id} className="screening-card">
            <div className="screening-content">
              <h3>{screening.name}</h3>
              <p><strong>Frequency:</strong> {screening.frequency}</p>
              <p>{screening.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ScreeningsList;
