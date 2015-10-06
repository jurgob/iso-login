'use strict';



import React from 'react';
import ReactDOM from 'react-dom';
import { Router} from 'react-router';
// import { history } from 'react-router/lib/BrowserHistory';
import { createHistory } from 'history';

const history = createHistory('/');
import routes from './shared/routes';

let clientRender = true;

if ( clientRender && typeof(window) !== 'undefined' && typeof(document) !== 'undefined' ) {
  ReactDOM.render(
    (<Router history={history}>{routes}</Router>),
    document.getElementById('content')
  );
}
