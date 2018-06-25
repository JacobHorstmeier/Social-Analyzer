import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Private from './components/Private/Private';
import Home from './components/Home/Home'

export default (
    <HashRouter>
    <Switch>
       <Route path='/' component={Login} exact />
       <Route path='/private' component={Private} />
       <Route path='/home' component={Home} />
    </Switch>
    </HashRouter>
)