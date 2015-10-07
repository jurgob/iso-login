'use strict';
import { createMemoryHistory ,createHistory} from 'history';
let history = require('is-browser') ? createHistory() : createMemoryHistory();

export default {
  history: history,
  replaceState: undefined
};
