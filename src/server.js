'use strict'

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';


import { RoutingContext, match } from 'react-router';
import history from './shared/history.js';
import routes from './shared/routes';

// import createLocation from 'history/lib/createLocation';

const app = express();
const pubDir = __dirname+'/../public';

app.set('serverside_rendering', true);

app.set('views', pubDir+'/views');
app.set('view engine', 'jade');

app.use('/js', express.static(pubDir+'/js'));
app.use('/css', express.static(pubDir+'/css'));
app.use('/img', express.static(pubDir+'/img'));


app.all('/*', function (req, res, next) {

  if (app.get('serverside_rendering')) {
    let location = history.createLocation(req.url);
    // let location = createLocation(req.url);
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
  }else {
    res.render('index',{ content: '' });
  }
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
