'use strict';

import React from 'react';
import { Route } from 'react-router';

import LoginForm from './components/LoginPage';
import HomePage from './components/HomePage';

function requireAuth(nextState, replaceState) {
  // replaceState({ nextPathname: nextState.location.pathname }, '/login');
}

let routes = (
  <Route path="/" >
    <Route path="login" component={LoginForm} />
    <Route path="home" component={HomePage} onEnter={requireAuth} />
  </Route>
);

export default routes;
