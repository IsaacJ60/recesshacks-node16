import React from 'react';
import './ScreeningsList.css';

// Sample screening data in the format: "Screening Name\nDescription\nFrequency"
const screeningData = `
1. Screening: Comprehensive Eye Exam
Frequency: every 1-2 years
Description: A comprehensive eye exam evaluates your vision and checks for any changes or abnormalities that may require further attention.

2. Screening: Blood Pressure Measurement
Frequency: every 1-2 years, or more frequently if indicated
Description: Regular blood pressure measurements help monitor your cardiovascular health, detect high blood pressure, and assess your risk for heart disease.

3. Screening: Colorectal Cancer Screening (Colonoscopy)
Frequency: every 10 years, starting at age 50 or earlier if recommended by your healthcare provider
Description: A colonoscopy helps detect early signs of colorectal cancer and other abnormal conditions in the colon and rectum.

4. Screening: Blood Glucose Test
Frequency: every 3 years, starting at age 45 or earlier if you have additional risk factors
Description: A blood glucose test checks for diabetes or prediabetes, evaluating your blood sugar levels and assessing your risk for developing diabetes.

5. Screening: Fasting Lipid Profile
Frequency: every 4-6 years, or more frequently if indicated
Description: A fasting lipid profile measures your cholesterol and triglyceride levels, aiding in the assessment of your cardiovascular health and risk for heart disease.
`;

function parseScreeningData(data) {
  const screeningsArray = data.trim().split('\n\n');
  return screeningsArray.map((screening, index) => {
    const [name, frequency, description] = screening.split('\n');
    return { id: index + 1, name, frequency, description };
  });
}

function ScreeningsList() {
  const screenings = parseScreeningData(screeningData);

  return (
    <div className="screenings-list">
      <h2 className="screenings-header">Screenings</h2>
      <ul>
        {screenings.map(screening => (
          <li key={screening.id} className="screening-card">
            <h3>{screening.name}</h3>
            <p> {screening.description}</p>
            <p> {screening.frequency}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScreeningsList;
