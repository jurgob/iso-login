'use strict';

import React from 'react';
import { Route } from 'react-router';

import LoginForm from './components/LoginPage';
import HomePage from './components/HomePage';

import history from './history.js';

function requireAuth() {
  console.log('requireAuth');
  history.pushState(null, '/home');
}


let routes = (
  <Route path="/" >
    <Route onEnter={requireAuth} >
      <Route path="login" component={LoginForm} />
    </Route>
    <Route path="home" component={HomePage} />
  </Route>
);

export default routes;
