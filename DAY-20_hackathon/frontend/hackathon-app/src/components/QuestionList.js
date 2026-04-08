import React, { useState, useEffect } from 'react';
import QuestionBox from './QuestionBox';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState(() => 
    Array(5).fill(null).map(() => ({ question: '', answer: '', confirmAnswer: '' }))
  );
  
  const [error, setError] = useState('');
  const [hideAnswers, setHideAnswers] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/questions')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        setQuestions(data);
      })
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  const handleChange = (index, field, value) => {
    setFormData(prevFormData => {
      const updatedFormData = [...prevFormData];
      updatedFormData[index] = { ...updatedFormData[index], [field]: value };
      return updatedFormData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Validation Logic
    const validationErrors = formData.map(({ question, answer, confirmAnswer }, index) => {
      if (!question) return ""; // Skip rows that aren't started
      if (!answer || !confirmAnswer) return `Question ${index + 1} is incomplete.`;
      if (answer !== confirmAnswer) return `Answer ${index + 1} does not match.`;
      return '';
    }).filter(Boolean);

    if (validationErrors.length) {
      setError(validationErrors.join(' '));
      return;
    }

    // 2. Requirement: Don't store confirmAnswer in the final data
    const dataToSave = formData
      .filter(row => row.question !== "") // Only save rows that have a question
      .map(({ question, answer }) => ({ question, answer }));

    if (dataToSave.length === 0) {
        setError("Please select at least one question.");
        return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/save-response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSave),
      });

      if (response.ok) {
        setError('');
        alert('Answers saved successfully!');
      } else {
        throw new Error('Failed to save response');
      }
    } catch (err) {
      setError('Server error: Could not save your answers.');
    }
  }; // Logic is now correctly contained inside this function

  const getAvailableQuestions = (currentBoxValue) => {
    const allSelectedQuestions = formData.map(item => item.question).filter(q => q !== "");
    return questions.filter(q => {
      // Return true if it's the current value OR if it's not selected anywhere else
      return q === currentBoxValue || !allSelectedQuestions.includes(q);
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Security Questions</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ cursor: 'pointer', fontWeight: 'bold' }}>
          <input 
            type="checkbox" 
            id="hide-checkbox"
            checked={hideAnswers} 
            onChange={(e) => setHideAnswers(e.target.checked)} 
          /> 
          {" "} Hide Answers 
        </label>
      </div>

      <form onSubmit={handleSubmit}>
        {formData.map((qa, index) => (
          <QuestionBox
            key={index}
            index={index}
            qa={qa}
            questions={getAvailableQuestions(qa.question)} 
            hideAnswers={hideAnswers}
            onChange={handleChange}
          />
        ))}
        
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        
        <button type="submit" style={{ marginTop: '20px', padding: '10px 20px' }}>
          Submit Responses
        </button>
      </form>
    </div>
  );
};

export default QuestionList;