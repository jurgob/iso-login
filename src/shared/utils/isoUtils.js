'use strict';

// import OWApiClient from './owApiClient';
import UserStore from '../stores/UserStore';
import SearchStore from '../stores/SearchStore';
import ApiUtils from '../utils/ApiUtils';


export function hydrateStores(state) {

  UserStore._state = state.username || "";

  SearchStore._state = {
    currentSearchUrl: state.currentSearchUrl || "",
    searchResults: state.searchResults || []
  };

}


export function dehydrateStores() {
  var stateObj = {
    username: UserStore.getState(),
    currentSearchUrl: SearchStore.getState().currentSearchUrl,
    searchResults: SearchStore.getState().searchResults
  };

  return stateObj;

}

export function fetchDataBeforeRender(renderApp, stateObj, request) {
  if (!stateObj) stateObj = {};

  fetchData(stateObj, request)
    .then(function(state) {
      console.log(' **** fetchData state: ',state);

      hydrateStores(state);
      renderApp(state);
    });


}

function fetchData(state, request) {

  return ApiUtils
    .login()
    .then(function(data) {
      state.username = data.username;
      console.log(' *** after login', state);
      return state;
    }).catch(function(err) {
      console.log('login err: ',err);
    });

}

/*export fetchDataBeforeRender = function(token, renderApp) {
  if (token) {
    OWApiClient.setAuthToken(token);

  var dataFetchedPromises = [];
  var preFetchedState = {};


  OWApiClient
  .getCurrentProfile()
  .then(function(data) {
    preFetchedState.username = data.username;
  })


  if(searchParams)
    dataFetchedPromises.push(
      OWApiClient
      .doSearch(searchParams)
      .then(function(data) {
        var searchUrl = searchParams;
        var results = [{searchUrl: data}];

        preFetchedState.currentSearchUrl = searchUrl;
        preFetchedState.searchResults = results;
      })
    );


  Promise.all(dataFetchedPromises).then(function() {
    assignState2Stores(preFetchedState);
    renderApp();
  });


  OWApiClient
		.getCurrentProfile()
    .then(function(response) {
      // UserStore._state = response.myUser;
      renderApp();
    })
    .catch((err) => {
      console.log('renderApp getCurrentProfile catch ', err);
      renderApp();
    });
}*/
