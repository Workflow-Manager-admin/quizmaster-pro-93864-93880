import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

/**
 * PUBLIC_INTERFACE
 * Dashboard component for QuizMaster Pro
 * @returns {React.Element} The Dashboard component
 */
const Dashboard = () => {
  const navigate = useNavigate();
  
  // Handler for navigating to the quiz list
  const handleStartQuiz = () => {
    navigate('/quizzes');
  };
  
  return (
    <div className="dashboard">
      <h1 className="page-title">Dashboard</h1>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Created Quizzes</h3>
          <p className="stat-number">0</p>
        </div>
        <div className="stat-card">
          <h3>Quizzes Taken</h3>
          <p className="stat-number">0</p>
        </div>
        <div className="stat-card">
          <h3>Average Score</h3>
          <p className="stat-number">0%</p>
        </div>
      </div>
      <div className="dashboard-recent">
        <h2>Recent Activity</h2>
        <p>No recent activity to display.</p>
        <button 
          className="btn"
          onClick={handleStartQuiz}
          style={{ marginTop: '20px' }}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
