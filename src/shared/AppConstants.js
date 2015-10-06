'use strict';

var ActionTypes = [
  "LOGIN_SUCCESS",
  "LOGIN_FAILED",
  "LOGOUT"
];

var ActionTypes = ActionTypes.reduce(function(obj, str) {
  obj[str] = str; return obj;
}, {});

module.exports = ActionTypes;
