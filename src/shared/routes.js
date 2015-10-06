'use strict';

import React from 'react';
import { Route } from 'react-router';

import LoginForm from './components/LoginPage';
import HomePage from './components/HomePage';

let routes = (
  <Route path="/" >
    <Route path="login" component={LoginForm} />
    <Route path="home" component={HomePage} />
  </Route>
);

export default routes;
