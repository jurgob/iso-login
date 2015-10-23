'use strict';

import {MapStore} from 'flux/utils';
import AppDispatcher from '../AppDispatcher';
import {SEARCH_RESULTS_RCV, SEARCH_START} from '../AppConstants';

class SearchStore extends MapStore {
  getInitialState() {
    return {
      currentSearchUrl: "",
      searchResults: []
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case SEARCH_RESULTS_RCV:
        return state;
        break;
      case SEARCH_START:
        return state;
        break;
      default:
        return state;
    }
  }

}

const instance = new SearchStore(AppDispatcher);

export default instance;
