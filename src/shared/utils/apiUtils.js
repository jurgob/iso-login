'use strict';
import HttpJsonClient from './HttpJsonClient';


let ApiUtils = (function() {
  var scope = {};
  scope.login = function() {
    console.log(' ** start login!! ');
    return HttpJsonClient
      .get('https://api.github.com/users/octocat/orgs')
      .then(function(json) {
        console.log('** login!! ');
        return {'username': 'jurgo boemo'};
      });
  };

  return scope;
})();

export default ApiUtils;
