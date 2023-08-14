import React, { useState } from 'react';
import './GeneralSurvey.css';
import { useNavigate } from 'react-router-dom';

const HealthSurvey = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/screenings');
  };

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [overallHealth, setOverallHealth] = useState('');
  const [sleepFrequency, setSleepFrequency] = useState('');
  const [exerciseFrequency, setExerciseFrequency] = useState('');
  const [medications, setMedications] = useState('');
  const [smoker, setSmoker] = useState('');
  const [alcoholConsumption, setAlcoholConsumption] = useState('');
  const [surgeries, setSurgeries] = useState('');
  const [stress, setStress] = useState('');
  const [healthConcerns, setHealthConcerns] = useState('');
  const [history, setHistory] = useState('');
  const [checkups, setCheckups] = useState('');
  const [vaccinations, setVaccinations] = useState('');
  const [sexual, setSexual] = useState('');

  return (
    <div className="health-survey-container">
      <h2 className="health-survey-header">SurveyScreen Male</h2>
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
          How would you rate your overall health?
          <select value={overallHealth} onChange={(e) => setOverallHealth(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>
          <br />
          <label>
          Do you engage in regular physical activity?
            <select value={exerciseFrequency} onChange={(e) => setExerciseFrequency(e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <br />
          <label>
          How many hours of sleep do you get on average each night?
            <input type="number" value={sleepFrequency} onChange={(e) => setSleepFrequency(e.target.value)} />
          </label>
          <br />
          <label>
          How often do you consume alcoholic beverages?
            <select value={alcoholConsumption} onChange={(e) => setAlcoholConsumption(e.target.value)}>
              <option value="">Select</option>
              <option value="very often">Very Often</option>
              <option value="not often">Not Often</option>
              <option value="never">Never</option>
            </select>
          </label>
          <br />
          <label>
          Are you experiencing any changes in libido or sexual desire?
            <select value={sexual} onChange={(e) => setSexual(e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="unsure">Unsure</option>
            </select>
          </label>
          <br />
          <label>
            Are you a smoker, or have you ever smoked in the past?
            <select value={smoker} onChange={(e) => setSmoker(e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <br />
          <label>
          Are you currently experiencing any erectile dysfunction or sexual health issues?
            <select value={alcoholConsumption} onChange={(e) => setAlcoholConsumption(e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="unsure">Unsure</option>
            </select>
          </label>
          <br />
          <label>
          Are you currently taking any medications? If yes, please list them.
            <input type="text" value={medications} onChange={(e) => setMedications(e.target.value)} />
          </label>
          <br />
          <label>
          Have you had any surgeries or medical procedures in the past year? If yes, please provide details.
            <input type="text" value={surgeries} onChange={(e) => setSurgeries(e.target.value)} />
          </label>
          <br />
          <label>
          How would you describe your stress level?
            <select value={stress} onChange={(e) => setStress(e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <br />
          <label>
          Are you experiencing any specific health concerns or symptoms currently?
            <select value={healthConcerns} onChange={(e) => setHealthConcerns(e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <br />
          <label>
          Do you have a family history of any significant medical conditions?
            <select value={history} onChange={(e) => setHistory(e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <br />
          <label>
          How often do you visit a healthcare professional for check-ups?
            <input type="text" value={checkups} onChange={(e) => setCheckups(e.target.value)} />
          </label>
          <br />
          <label>
          Are you up-to-date with your vaccinations? 
            <select value={vaccinations} onChange={(e) => setVaccinations(e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="unsure">Unsure</option>
            </select>
          </label>
          <br />
          <button className="submit-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default HealthSurvey;
