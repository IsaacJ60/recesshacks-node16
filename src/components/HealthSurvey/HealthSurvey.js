import React, { useState } from 'react';
import './HealthSurvey.css';
import { useNavigate, Link } from 'react-router-dom';

const HealthSurvey = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate('/screenings');
  };

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [exercise, setExercise] = useState('');
  const [diet, setDiet] = useState('');

  return (
    <div className="health-survey-container">
      <Link to="/help" className="help-button">Help</Link>
      <h2 className="health-survey-header">Health Survey</h2>
      <div className="form-container">
      <form className="health-survey-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Age
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <br />
      <label>
        Gender
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <label>
        How often do you exercise?
        <input type="text" value={exercise} onChange={(e) => setExercise(e.target.value)} />
      </label>
      <br />
      <label>
        Describe your diet:
        <textarea value={diet} onChange={(e) => setDiet(e.target.value)} />
      </label>
      <br />
      <button className="submit-button" type="submit">Submit</button>
    </form>
      </div>
    </div>
  );
}

export default HealthSurvey;
