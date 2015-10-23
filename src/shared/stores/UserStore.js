'use strict';

import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../AppDispatcher';
import {LOGIN_SUCCESS} from '../AppConstants';

class UserStore extends ReduceStore {
  getInitialState() {
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

export default instance;
