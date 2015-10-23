'use strict';
import HttpJsonClient from './HttpJsonClient';



let ApiUtils = (function() {
  var scope = {};

  scope.setAuthToken = function(token) {
    HttpJsonClient.setRequestHeader('Authorization', 'Bearer '+token);
  };

  scope.isAuthTokenSetted = function(token) {
    return !!HttpJsonClient.getRequestSettedHeaders().Authorization;
  };

  let printError = (err) => {
    console.log('fetch error: ',err);
  };

  let returnJson = (json) => {
    console.log('returnJson ',returnJson);
    return json();
  };

  scope.login = function() {
    console.log(' ** start login!! ');
    return HttpJsonClient
      .get('https://api.github.com/users/octocat/orgs')
      .then(function(json) {
        return {'username': 'username faked'};
      })
      .catch(printError);
  };

  scope.getCurrentProfile = function() {
    return Promise.resolve((json) => {
      return {'username': 'username faked'};
    }).then(returnJson);
  };

  scope.search = function(params) {

    if (!scope.isAuthTokenSetted()) {
      return Promise.reject();
    }else {
      //I remove the header just to avoit error
      let oldToken = HttpJsonClient.getRequestSettedHeaders().Authorization;
      HttpJsonClient.unsetRequestHeader('Authorization');
      let promise = HttpJsonClient
        .get('https://api.github.com/search/repositories'+'?'+HttpJsonClient.utils.objectParams2url(params))
        .then(function(json) {
          return json;
        });

      scope.setAuthToken(oldToken);

      return promise;
    }

  };


  return scope;
})();

export default ApiUtils;
