import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Sidebar from '../src/Component/Sidebar';
// import Header from '../src/Component/header';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          {/* <Header /> */}
          </div>
        </div>

    </Router>
  );
};

export default App;
