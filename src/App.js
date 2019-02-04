import React, { Component } from 'react';
import logo from './dd-logo.svg';
import './App.css';

import StatsSection from './StatsSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <StatsSection />
        </header>
      </div>
    );
  }
}

export default App;
