
import { Configuration, OpenAIApi } from "openai"
import React, { useState } from 'react';
import './HealthSurvey.css';
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
  const [cholesterolChecked, setCholesterolChecked] = useState('');
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
  
  const labelList = [
    'Name',
    'Age',
    'Gender',
    'Have you ever had your cholesterol levels checked? If so, when was the last time and what was the level?',
    'Are you experiencing any changes in your vision, such as blurriness or difficulty focusing?',
    'How frequently do you engage in physical activity or exercise?',
    'Have you noticed any unusual moles or skin changes on your body?',
    'Are you a smoker, or have you ever smoked in the past?',
    'How often do you consume alcohol, and in what quantities?',
    'Have you experienced any significant changes in your weight recently?',
    'Do you have a family history of heart disease, high blood pressure, or diabetes?',
    'Have you ever had a colonoscopy or any other colorectal screening?',
    'Are you experiencing any gastrointestinal symptoms like bloating, abdominal pain, or changes in bowel habits?',
    'Have you ever been tested for sexually transmitted infections (STIs)? If so, when was your last test?',
    'Are you currently experiencing any respiratory symptoms like persistent coughing or shortness of breath?',
    'Have you ever had a bone density test (DEXA scan) to assess your bone health?',
    'Are you experiencing any urinary changes, such as increased frequency, urgency, or pain?',
    'Have you had a mammogram to screen for breast cancer? If yes, when was your last one?',
    'Have you been screened for diabetes or had your blood sugar levels checked recently?'
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
        return cholesterolChecked;
      case 4:
        return visionChanges;
      case 5:
        return exerciseFrequency;
      case 6:
        return skinChanges;
      case 7:
        return smoker;
      case 8:
        return alcoholConsumption;
      case 9:
        return weightChanges;
      case 10:
        return familyHistory;
      case 11:
        return colonoscopyHistory;
      case 12:
        return gastroSymptoms;
      case 13:
        return STITest;
      case 14:
        return respiratorySymptoms;
      case 15:
        return boneDensityTest;
      case 16:
        return urinaryChanges;
      case 17:
        return mammogramHistory;
      case 18:
        return diabetesScreening;
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
      apiKey:       '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',
      
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
      <h2 className="health-survey-header">SurveyScreen Female</h2>
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
          <button className="submit-button" type="submit" onClick={generateRecommendations}>Submit</button>
        </form>
      </div>
      <ScreeningsList recommendations={generatedRecommendations} />

    </div>
  );
}

export default HealthSurvey;
