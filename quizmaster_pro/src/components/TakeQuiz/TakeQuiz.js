import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './TakeQuiz.css';

/**
 * PUBLIC_INTERFACE
 * TakeQuiz component for taking a quiz
 * @returns {React.Element} The TakeQuiz component
 */
const TakeQuiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const quizId = location.state?.quizId;
  
  // State to track current question number
  const [currentQuestionNum, setCurrentQuestionNum] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  
  // Placeholder quiz data
  const quiz = {
    title: 'Sample Quiz',
    currentQuestion: currentQuestionNum,
    totalQuestions: 10,
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Madrid']
  };
  
  // Handle next button click
  const handleNext = () => {
    if (currentQuestionNum < quiz.totalQuestions) {
      // Move to next question
      setCurrentQuestionNum(currentQuestionNum + 1);
      setSelectedOption(null);
    } else {
      // If this is the last question, navigate to results page
      navigate('/dashboard', { state: { quizCompleted: true } });
    }
  };
  
  // Handle previous button click
  const handlePrevious = () => {
    if (currentQuestionNum > 1) {
      setCurrentQuestionNum(currentQuestionNum - 1);
      setSelectedOption(null);
    }
  };
  
  // Handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
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
                checked={selectedOption === option}
                onChange={() => handleOptionSelect(option)}
              />
              <label htmlFor={`option-${index}`}>{option}</label>
            </div>
          ))}
        </div>
        
        <div className="quiz-navigation">
          <button 
            className="btn" 
            onClick={handlePrevious}
            disabled={currentQuestionNum === 1}
          >
            Previous
          </button>
          <button 
            className="btn" 
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TakeQuiz;
