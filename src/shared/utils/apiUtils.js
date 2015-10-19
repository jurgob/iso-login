'use strict';
import HttpJsonClient from './HttpJsonClient';


let ApiUtils = (function() {
  var scope = {};
  scope.login = function() {
    return HttpJsonClient
      .get('https api.github.com/users/octocat/orgs')
      .then(function(json) {
        return {'username': 'jurgo boemo'};
      });
  };

  return scope;
})();

export default ApiUtils;
