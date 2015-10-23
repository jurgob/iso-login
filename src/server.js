'use strict';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { RoutingContext, match } from 'react-router';
import config from './shared/config';
import {history} from './shared/history.js';
import routes from './shared/routes';

// import HttpJsonClient from './shared/utils/HttpJsonClient';

import UserStore from './shared/stores/UserStore';
// import AppActions from './shared/AppActions';
import ApiUtils from './shared/utils/ApiUtils';
import { fetchDataBeforeRender } from './shared/utils/isoUtils';

const app = express();
const pubDir = __dirname+'/../public';

app.set('serverside_rendering', config.render_server);

app.set('views', pubDir+'/views');
app.set('view engine', 'jade');
//
app.use('/js', express.static(pubDir+'/js'));
app.use('/css', express.static(pubDir+'/css'));
app.use('/img', express.static(pubDir+'/img'));



app.all('/*', function (req, res, next) {
  if (app.get('serverside_rendering')) {
    var renderServerSide = function() {
      let location = history.createLocation(req.url);
      match({ routes, location }, (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
          console.log('-- redirect: '+redirectLocation.pathname);
          res.redirect(301, redirectLocation.pathname + redirectLocation.search);
        }else if (error)
          res.status(500).send(error.message);
        else if (renderProps == null) {
          res.status(404).send('Not found');
        } else {
          let serverRender = ReactDOMServer.renderToString(<RoutingContext {...renderProps}/>);
          res.render('index',{ content: serverRender });
        }
      });
    };

    // UserStore._state = 'bau';

    // renderServerSide();
    fetchDataBeforeRender(null, renderServerSide);
    // ApiUtils
    //   .login()
    //   .then(function(user) {
    //     console.log('user ',user);
    //     global.__STATE__ = {};
    //     global.__STATE__.UserStore = user.username;
    //     renderServerSide();
    //   });





  }else {
    res.render('index',{ content: '' });
  }
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
