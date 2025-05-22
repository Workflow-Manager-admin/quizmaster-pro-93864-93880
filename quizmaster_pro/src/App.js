import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

/**
 * Main App component for QuizMaster Pro
 * @returns {React.Element} The App component
 */
function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol" style={{ color: 'var(--primary-green)' }}>*</span> QuizMaster Pro
            </div>
            <div>
              <button className="btn">Sign In</button>
            </div>
          </div>
        </div>
      </nav>

      <MainContainer />
    </div>
  );
}

export default App;