import React from 'react';

const QuestionBox = ({ index, qa, questions, hideAnswers, onChange }) => (
  <div className="question-block" style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
    <label>Question {index + 1}:</label>
    <select 
      value={qa.question} 
      onChange={e => onChange(index, 'question', e.target.value)}
      style={{ display: 'block', margin: '5px 0' }}
    >
      <option value="">-- Select Question --</option>
      {questions.map((q, i) => (
        <option key={i} value={q}>{q}</option>
      ))}
    </select>

    <input
      type={hideAnswers ? "password" : "text"}
      placeholder="Answer"
      value={qa.answer}
      onChange={e => onChange(index, 'answer', e.target.value)}
    />

    <input
      type={hideAnswers ? "password" : "text"}
      placeholder="Confirm Answer"
      value={qa.confirmAnswer}
      onChange={e => onChange(index, 'confirmAnswer', e.target.value)}
    />
  </div>
);

export default QuestionBox;