
import { Configuration, OpenAIApi } from "openai"

import React, { useState } from 'react';
import './GeneralSurvey.css';
import { useNavigate } from 'react-router-dom';
import ScreeningList from './ScreeningsList/ScreeningsList.js';





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

  const labelList = [
    'Name',
    'Age',
    'Gender',
    'How would you rate your overall health?',
    'Do you engage in regular physical activity?',
    'How many hours of sleep do you get on average each night?',
    'How often do you consume alcoholic beverages?',
    'Are you experiencing any changes in libido or sexual desire?',
    'Are you a smoker, or have you ever smoked in the past?',
    'Are you currently experiencing any erectile dysfunction or sexual health issues?',
    'Are you currently taking any medications? If yes, please list them.',
    'Have you had any surgeries or medical procedures in the past year? If yes, please provide details.',
    'How would you describe your stress level?',
    'Are you experiencing any specific health concerns or symptoms currently? If yes, please describe.',
    'Do you have a family history of any significant medical conditions? If yes, please specify.',
    'How often do you visit a healthcare professional for check-ups?',
    'Are you up-to-date with your vaccinations?'
  ];
  
  const getStateVariable = (index) => {
    switch (index) {
      case 0:
        return name;
      case 1:
        return age;
      case 2:
        return gender;
      case 3:
        return overallHealth;
      case 4:
        return sleepFrequency;
      case 5:
        return exerciseFrequency;
      case 6:
        return medications;
      case 7:
        return smoker;
      case 8:
        return alcoholConsumption;
      case 9:
        return surgeries;
      case 10:
        return stress;
      case 11:
        return healthConcerns;
      case 12:
        return history;
      case 13:
        return checkups;
      case 14:
        return vaccinations;
      case 15:
        return sexual;
      default:
        return '';
    }
  };
  let content1 = ''

  for (let i = 0; i < labelList.length; i++) {
    content1 += `${labelList[i]}\n${getStateVariable(i)}\n`;
  }  
  
  
  const [generatedRecommendations, setGeneratedRecommendations] = useState('');

  const openAi = new OpenAIApi(
    new Configuration({
      apiKey: 
      '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',
    })
  )
  
  const prompt = "You are a medical professional, what screenings would you recommend to a person who has answered the following medical survey?" + content1 + "Make sure everything you recommend is a screening, and strictly appropriate given their answers in the format 'Screening: [screening].' List a frequency of how often the patient should get the screening in a new line in the format 'Frequency: every 5 years.' Give a 1-sentence description of what the screening does/is for as well, and phrase it as if you are talking directly to the patient in the format 'Description: [description]'. Make sure it generates in the order: screening, frequency, description. Only recommend up to 5 screenings.";
  const generateRecommendations = async (content) => {
    (async () => {
    const response = await openAi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    })
    console.log(response.data.choices[0].message.content)
    setGeneratedRecommendations(response.data.choices[0].message.content);

    })();
}

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
          Are you experiencing any specific health concerns or symptoms currently? If yes, please describe.
            <select value={healthConcerns} onChange={(e) => setHealthConcerns(e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <br />
          <label>
          Do you have a family history of any significant medical conditions? If yes, please specify.
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
          <button className="submit-button" type="submit" onClick={generateRecommendations}>Submit</button>
        </form>
      </div>
      <ScreeningsList recommendations={generatedRecommendations} />

    </div>
  );
}

export default HealthSurvey;
