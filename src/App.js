import React, { Component } from 'react';
import logo from './dd-logo.svg';
import './App.css';

import StatsSection from './StatsSection';
import AppHeader from './AppHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppHeader />
          <img src={logo} className="App-logo" alt="logo" />
          <StatsSection />
        </header>
      </div>
    );
  }
}

export default App;
