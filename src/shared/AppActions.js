'use strict';
// import AppDispatcher from '../AppDispatcher';
// import AppConstants 	from '../AppConstants';

import {replaceState} from './history';

var AppActions = {
  doLogin: () => {
    replaceState({}, '/home');
  }
};

export default AppActions;
