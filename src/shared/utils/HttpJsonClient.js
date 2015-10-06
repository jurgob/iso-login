'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

import objectParams2url from './objectParams2url';

var HttpJsonClient = (function() {
  var scope = {};
  var requestHeader = {};
  function _checkStatus(response) {
    // console.log('checkStatus response', response)
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
  function _parseJSON(response) {
    // console.log('parseJSON');
    return response.json();
  }
  function _fetchJson(url, options) {
    if (typeof(options.body) === 'object' )
      options.body = objectParams2url(options.body);
    return fetch(url, options)
        .then(_checkStatus)
        .then(_parseJSON);
  }
  function _fetchJsonConfig(method, defHeaders) {
    return function(url, options) {
      if (!options)
        options = {};

      options.headers = Object.assign({}, requestHeader, defHeaders, options.headers);
      options.method = method;
      return _fetchJson(url, options);
    };
  }
  scope.setRequestHeader = function(name, value) {
    requestHeader[name] = value;
  };
  scope.post = _fetchJsonConfig('post',{"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"});
  scope.get = _fetchJsonConfig('get' ,{});
  scope.put = _fetchJsonConfig('put' ,{});
  scope.delete = _fetchJsonConfig('delete' ,{});

  return scope;

})();


export default HttpJsonClient;
