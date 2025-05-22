import React from 'react';
import './QuizList.css';

/**
 * PUBLIC_INTERFACE
 * QuizList component for displaying available quizzes
 * @returns {React.Element} The QuizList component
 */
const QuizList = () => {
  // Placeholder quiz data
  const quizzes = [
    {
      id: 1,
      title: 'General Knowledge Quiz',
      category: 'General',
      difficulty: 'Medium',
      questionCount: 10
    },
    {
      id: 2,
      title: 'Science Trivia',
      category: 'Science',
      difficulty: 'Hard',
      questionCount: 15
    }
  ];

  return (
    <div className="quiz-list">
      <h1 className="page-title">Available Quizzes</h1>
      
      <div className="filters">
        <select className="filter-select">
          <option value="">All Categories</option>
          <option value="general">General Knowledge</option>
          <option value="science">Science</option>
          <option value="history">History</option>
        </select>
        
        <select className="filter-select">
          <option value="">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      
      <div className="quiz-grid">
        {quizzes.length > 0 ? (
          quizzes.map(quiz => (
            <div key={quiz.id} className="quiz-card">
              <h3 className="quiz-title">{quiz.title}</h3>
              <div className="quiz-details">
                <span className="quiz-category">{quiz.category}</span>
                <span className="quiz-difficulty">{quiz.difficulty}</span>
              </div>
              <p className="quiz-question-count">{quiz.questionCount} questions</p>
              <button className="btn">Start Quiz</button>
            </div>
          ))
        ) : (
          <p>No quizzes available.</p>
        )}
      </div>
    </div>
  );
};

export default QuizList;
