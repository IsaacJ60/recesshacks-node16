import React, { useState } from 'react';
import './Help.css';
import { Link } from 'react-router-dom';

function Help() {
  const faqData = [
    { question: 'How do I get started?', answer: 'To get started, fill out the survey and click submit!' },
    { question: 'What if I encounter an error?', answer: 'If you encounter any errors or issues, please try reloading the page and resubmitting your info.' },
  ];

  const [expandedIndices, setExpandedIndices] = useState([]);

  const toggleAnswer = (index) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter(i => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  return (
    <div> 
<Link to="/" className="home-button">Home</Link>
    <div className="help-container">
      <h2>Frequently Asked Questions (FAQ)</h2>
      <div className="faq-section">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${expandedIndices.includes(index) ? 'open' : ''}`}
          >
            <button className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
            </button>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>

      {}
      {}
    </div>
    </div>
  );
}

export default Help;
