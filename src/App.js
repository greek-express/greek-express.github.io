import React from 'react';
import logo from './logo.png';
import constructionLogo from './img/svg/Construction.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Under Construction
        </p>
        <img src={constructionLogo} className="construction-logo" alt="construction" />
      </header>
    </div>
  );
}

export default App;
