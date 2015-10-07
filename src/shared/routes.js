'use strict';

import React from 'react';
import { Route } from 'react-router';

import LoginForm from './components/LoginPage';
import HomePage from './components/HomePage';
import Actions from './AppActions';
import historyObj from './history.js';

function historySetup(nextState, replaceState) {
  historyObj.replaceState = replaceState;//TODO: this is the ugliest solution ever
}

function doLogin(nextState, replaceState) {
  Actions.doLogin();
}

let routes = (
  <Route path="/" onEnter={historySetup} >
    <Route path="login" component={LoginForm} onEnter={doLogin} />
    <Route path="home" component={HomePage} />
  </Route>
);

export default routes;
