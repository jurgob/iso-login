'use strict';

import { hydrateStores } from './shared/utils/isoUtils';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router} from 'react-router';
// import { history } from 'react-router/lib/BrowserHistory';
import { createHistory } from 'history';
import config from './shared/config';

const history = createHistory('/');
import routes from './shared/routes';

let clientRender = config.render_client;

if ( clientRender && typeof(window) !== 'undefined' && typeof(document) !== 'undefined' ) {

  let clientSideRender = function(state) {
    ReactDOM.render(
      (<Router history={history}>{routes}</Router>),
      document.getElementById('content')
    );
  };
  var state = window.__STATE__;
  fetchDataBeforeRender(clientSideRender, state);
}
