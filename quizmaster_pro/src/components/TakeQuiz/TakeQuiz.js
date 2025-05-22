import React from 'react';
import './TakeQuiz.css';

/**
 * PUBLIC_INTERFACE
 * TakeQuiz component for taking a quiz
 * @returns {React.Element} The TakeQuiz component
 */
const TakeQuiz = () => {
  // Placeholder quiz data
  const quiz = {
    title: 'Sample Quiz',
    currentQuestion: 1,
    totalQuestions: 10,
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Madrid']
  };
  
  return (
    <div className="take-quiz">
      <h1 className="page-title">{quiz.title}</h1>
      
      <div className="quiz-progress">
        <div className="progress-bar">
          <div 
            className="progress-filled" 
            style={{ width: `${(quiz.currentQuestion / quiz.totalQuestions) * 100}%` }}
          ></div>
        </div>
        <div className="progress-text">
          Question {quiz.currentQuestion} of {quiz.totalQuestions}
        </div>
      </div>
      
      <div className="quiz-question">
        <h2>{quiz.question}</h2>
        
        <div className="options-list">
          {quiz.options.map((option, index) => (
            <div key={index} className="option">
              <input 
                type="radio" 
                id={`option-${index}`} 
                name="quiz-option"
                value={option}
              />
              <label htmlFor={`option-${index}`}>{option}</label>
            </div>
          ))}
        </div>
        
        <div className="quiz-navigation">
          <button className="btn">Previous</button>
          <button className="btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default TakeQuiz;
