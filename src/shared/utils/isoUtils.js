'use strict';

import OWApiClient from './owApiClient';
import LoginStore from '../stores/LoginStore';


 

function fetchDataBeforeRender(token, renderApp) {
  if (token) {
    console.log('fetchDataBeforeRender token', token);
    OWApiClient.setAuthToken(token);
    OWApiClient
		.getCurrentProfile()
    .then(function(response) {
      console.log('renderApp getCurrentProfile then ', response);
      LoginStore._user = response.myUser;
      console.log('renderApp getCurrentProfile then LoginStore.isLoggedIn()', LoginStore.isLoggedIn());
      renderApp();
    })
    .catch((err) => {
      console.log('renderApp getCurrentProfile catch ', err);
      LoginStore._user = undefined;
      renderApp();
    });
  } else {
    console.log('renderApp getCurrentProfile not token');
    LoginStore._user = undefined;
    renderApp();
  }
}

export default {
  fetchDataBeforeRender: fetchDataBeforeRender
};
