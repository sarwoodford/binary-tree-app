import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EnterNumbers from './EnterNumbers';
import PreviousTrees from './PreviousTrees';

function App() {
  return (
    <div className="App">
      <header className="Header">

        <Router>
          <Routes>
            <Route path="/" element={<EnterNumbers />} />
            <Route path="/previous" element={<PreviousTrees />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
