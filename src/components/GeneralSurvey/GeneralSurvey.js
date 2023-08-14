import React, { useState } from 'react';
import './GeneralSurvey.css';
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
  const [cholesterolChecked, setCholesterolChecked] = useState('');
  const [cholesterolLastChecked, setCholesterolLastChecked] = useState('');
  const [visionChanges, setVisionChanges] = useState('');
  const [exerciseFrequency, setExerciseFrequency] = useState('');
  const [skinChanges, setSkinChanges] = useState('');
  const [smoker, setSmoker] = useState('');
  const [alcoholConsumption, setAlcoholConsumption] = useState('');
  const [weightChanges, setWeightChanges] = useState('');
  const [familyHistory, setFamilyHistory] = useState('');
  const [colonoscopyHistory, setColonoscopyHistory] = useState('');
  const [gastroSymptoms, setGastroSymptoms] = useState('');
  const [STITest, setSTITest] = useState('');
  const [respiratorySymptoms, setRespiratorySymptoms] = useState('');
  const [boneDensityTest, setBoneDensityTest] = useState('');
  const [urinaryChanges, setUrinaryChanges] = useState('');
  const [mammogramHistory, setMammogramHistory] = useState('');
  const [diabetesScreening, setDiabetesScreening] = useState('');

  return (
    <div className="health-survey-container">
      <h2 className="health-survey-header">Health Survey</h2>
      <div className="form-container">
        <form className="health-survey-form" onSubmit={handleSubmit}>
          <label>
            Name GENERAL SURVEY
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
            Have you ever had your cholesterol levels checked? If so, when was the last time and what was the level?
            <input type="text" value={cholesterolChecked} onChange={(e) => setCholesterolChecked(e.target.value)} />
          </label>
          <br />
          <label>
            Are you experiencing any changes in your vision, such as blurriness or difficulty focusing?
            <select value={visionChanges} onChange={(e) => setVisionChanges(e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <br />
          <label>
            How frequently do you engage in physical activity or exercise?
            <input type="text" value={exerciseFrequency} onChange={(e) => setExerciseFrequency(e.target.value)} />
          </label>
          <br />
          <label>
            Have you noticed any unusual moles or skin changes on your body?
            <select value={skinChanges} onChange={(e) => setSkinChanges(e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
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
            How often do you consume alcohol, and in what quantities?
            <input type="text" value={alcoholConsumption} onChange={(e) => setAlcoholConsumption(e.target.value)} />
          </label>
          <br />
          <label>
            Have you experienced any significant changes in your weight recently?
            <input type="text" value={weightChanges} onChange={(e) => setWeightChanges(e.target.value)} />
          </label>
          <br />
          <label>
            Do you have a family history of heart disease, high blood pressure, or diabetes?
            <select value={familyHistory} onChange={(e) => setFamilyHistory(e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <br />
          <label>
            Have you ever had a colonoscopy or any other colorectal screening?
            <select value={colonoscopyHistory} onChange={(e) => setColonoscopyHistory(e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <br />
          <label>
            Are you experiencing any gastrointestinal symptoms like bloating, abdominal pain, or changes in bowel habits?
            <select value={gastroSymptoms} onChange={(e) => setGastroSymptoms(e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <br />
          <label>
            Have you ever been tested for sexually transmitted infections (STIs)? If so, when was your last test?
            <input type="text" value={STITest} onChange={(e) => setSTITest(e.target.value)} />
          </label>
          <br />
          <label>
            Are you currently experiencing any respiratory symptoms like persistent coughing or shortness of breath?
            <select value={respiratorySymptoms} onChange={(e) => setRespiratorySymptoms(e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <br />
          <label>
            Have you ever had a bone density test (DEXA scan) to assess your bone health?
            <select value={boneDensityTest} onChange={(e) => setBoneDensityTest(e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <br />
          <label>
            Are you experiencing any urinary changes, such as increased frequency, urgency, or pain?
            <select value={urinaryChanges} onChange={(e) => setUrinaryChanges(e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <br />
          <label>
            Have you had a mammogram to screen for breast cancer? If yes, when was your last one?
            <input type="text" value={mammogramHistory} onChange={(e) => setMammogramHistory(e.target.value)} />
          </label>
          <br />
          <label>
            Have you been screened for diabetes or had your blood sugar levels checked recently?
            <select value={diabetesScreening} onChange={(e) => setDiabetesScreening(e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
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
