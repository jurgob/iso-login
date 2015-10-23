'use strict';

import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../AppDispatcher';
import {SEARCH_RESULTS_RCV, SEARCH_START} from '../AppConstants';
import Immutable from 'immutable';

class SearchStore extends ReduceStore {
  getInitialState() {
    let state = Immutable.Map({
      currentSearchUrl: ""
    });
    return state;
  }

  reduce(state, action) {
    switch (action.type) {
      case SEARCH_RESULTS_RCV:
        state.set(currentSearchUrl, action.url);
        state.set(action.url, action.results);
        return state;
        break;
      case SEARCH_START:
        state.set(currentSearchUrl, action.url);
        state.set(action.url, null);
        return state;
        break;
      default:
        return state;
    }
  }

  getCurrentSearchUrl() {
    let state = this.getState();
    return state.get('currentSearchUrl');
  }

  getCurrentSearch() {
    let state = this.getState();
    return state.get(state.get('currentSearchUrl'));
  }


}

const instance = new SearchStore(AppDispatcher);




export default instance;
