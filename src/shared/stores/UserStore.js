'use strict';

import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../AppDispatcher';
import {LOGIN_SUCCESS} from '../AppConstants';


// function getStoreInitialState(storeName) {
//   console.log('£££ getStoreInitialState');
//   if (!require('is-browser')) {
//     return global.__STATE__[storeName];
//   } else {
//     return window.__STATE__[storeName];
//   }
// }

class UserStore extends ReduceStore {
  getInitialState() {
    // var init_state = getStoreInitialState('UserStore');
    return '';
  }

  reduce(state, action) {
    switch (action.type) {
      case LOGIN_SUCCESS:
        console.log('++catch LOGIN_SUCCESS ',action.username);
        return action.username;
        break;
      default:
        return state;
    }
  }

  getUsername() {
    console.log('getUsername');
    return this.getState();
  }
  isAuth() {
    return !!this.getState();
  }

}

const instance = new UserStore(AppDispatcher);

if ( require('is-browser') ) {
  window.UserStore = instance;
}

export default instance;
