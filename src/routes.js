import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Private from './components/Private/Private';

export default (
    <HashRouter>
    <Switch>
       <Route path='/' component={Login} exact />
       <Route path='/private' component={Private} />
    </Switch>
    </HashRouter>
)