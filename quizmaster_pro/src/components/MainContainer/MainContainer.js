import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './MainContainer.css';

// Import components
import Dashboard from '../Dashboard/Dashboard';
import QuizCreator from '../QuizCreator/QuizCreator';
import QuizList from '../QuizList/QuizList';
import TakeQuiz from '../TakeQuiz/TakeQuiz';

/**
 * PUBLIC_INTERFACE
 * MainContainer component for QuizMaster Pro
 * Primary container that centralizes quiz creation, management, and participation functionality
 * @returns {React.Element} The MainContainer component
 */
const MainContainer = () => {
  return (
    <Router>
      <div className="main-container">
        <div className="sidebar">
          <div className="sidebar-title">QuizMaster Pro</div>
          <ul className="sidebar-nav">
            <li>
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/create-quiz" className={({ isActive }) => isActive ? 'active' : ''}>
                Create Quiz
              </NavLink>
            </li>
            <li>
              <NavLink to="/quizzes" className={({ isActive }) => isActive ? 'active' : ''}>
                Browse Quizzes
              </NavLink>
            </li>
            <li>
              <NavLink to="/take-quiz" className={({ isActive }) => isActive ? 'active' : ''}>
                Take Quiz
              </NavLink>
            </li>
          </ul>
        </div>
        
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-quiz" element={<QuizCreator />} />
            <Route path="/quizzes" element={<QuizList />} />
            <Route path="/take-quiz" element={<TakeQuiz />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default MainContainer;
