'use strict';

import React from 'react';
import { Route } from 'react-router';

import LoginForm from './components/LoginPage';

let routes = (
  <Route path="/" component={LoginForm} />
);

export default routes;
