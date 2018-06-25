import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Private from './components/Private/Private';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Insights from './components/Insights/Insights';

export default (
    <HashRouter>
    <Switch>
       <Route path='/' component={Login} exact />
       <Route path='/private' component={Private} />
       <Route path='/home' component={Home} />
       <Route path='/about' component={About} />
       <Route path='/contact' component={Contact} />
       <Route path='/insights' component={Insights} />
    </Switch>
    </HashRouter>
)