'use strict';
// import AppDispatcher from '../AppDispatcher';
// import AppConstants 	from '../AppConstants';

// import {replaceState} from './history';
import {dispatch} from './AppDispatcher';
import {LOGIN_SUCCESS} from './AppConstants';
import ApiUtils from './utils/ApiUtils';

var AppActions = {
  doLogin: () => {
    // replaceState({}, '/home');

    console.log('- dispach LOGIN_SUCCESS');
    let loginSuccess = (user) => {
      dispatch({
        type: LOGIN_SUCCESS,
        username: user.username
      });
    };

    ApiUtils.login()
      .then(loginSuccess);

  }
};

export default AppActions;
