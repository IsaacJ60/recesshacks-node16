import React from 'react';
import './ScreeningsList.css';

// Sample screening data in the format: "Screening Name\nDescription\nFrequency"
const screeningData = `
1. Screening: Lipid profile (cholesterol levels)
Frequency: Every 5 years.
Description: This screening checks your cholesterol levels to assess your risk for heart disease and helps determine if lifestyle changes or medication are necessary.

2. Screening: Colonoscopy or colorectal screening
Frequency: Starting at age 50, every 10 years.
Description: This screening helps detect and prevent colorectal cancer by examining the colon and rectum for abnormalities or early signs of cancer.

3. Screening: Bone density test (DEXA scan)
Frequency: Starting at age 50 for women, every 2 years.
Description: This test evaluates your bone health and helps identify osteoporosis or low bone density, which can increase the risk of fractures.

4. Screening: Mammogram
Frequency: Starting at age 50, every 2 years.
Description: A mammogram is used to detect breast cancer in its early stages, allowing for more effective treatment options and improved outcomes.

5. Screening: Diabetes screening (blood sugar levels)
Frequency: Starting at age 45, every 3 years.
Description: This test assesses your blood sugar levels to screen for diabetes and identify risk factors for developing the condition.
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
