import React, { Component } from 'react';
import './App.css';
import PersonalityInsight from './components/PersonalityInsight/PersonalityInsight';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        { routes }
        <PersonalityInsight />
      </div>
    );
  }
}

export default App;
