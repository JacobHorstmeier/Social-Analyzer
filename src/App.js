import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Private from './components/Private/Private';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
          <Route path='/' component={Login} exact />
            <Route path='/private' component={Private} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
