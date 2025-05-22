import React from 'react';
import './QuizCreator.css';

/**
 * PUBLIC_INTERFACE
 * QuizCreator component for creating new quizzes
 * @returns {React.Element} The QuizCreator component
 */
const QuizCreator = () => {
  return (
    <div className="quiz-creator">
      <h1 className="page-title">Create New Quiz</h1>
      <form className="quiz-form">
        <div className="form-group">
          <label htmlFor="quizTitle">Quiz Title</label>
          <input 
            type="text" 
            id="quizTitle" 
            placeholder="Enter quiz title" 
            className="form-control"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="quizCategory">Category</label>
          <select id="quizCategory" className="form-control">
            <option value="">Select a category</option>
            <option value="general">General Knowledge</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            <option value="geography">Geography</option>
            <option value="arts">Arts & Literature</option>
            <option value="sports">Sports</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="quizDifficulty">Difficulty</label>
          <select id="quizDifficulty" className="form-control">
            <option value="">Select difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Questions will be added in the next step</label>
        </div>
        
        <button type="submit" className="btn">Continue to Add Questions</button>
      </form>
    </div>
  );
};

export default QuizCreator;
