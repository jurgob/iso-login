'use strict'

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { createMemoryHistory } from 'history';
import { RoutingContext, match } from 'react-router';

import routes from './shared/routes';

const app = express();
const pubDir = __dirname+'/../public';
let history = createMemoryHistory();

app.set('views', pubDir+'/views');
app.set('view engine', 'jade');

app.use('/js', express.static(pubDir+'/js'));
app.use('/css', express.static(pubDir+'/css'));
app.use('/img', express.static(pubDir+'/img'));


app.all('/*', function (req, res, next) {
  let location = history.createLocation(req.url);
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      console.log('-- redirect: '+redirectLocation.pathname);
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    }else if (error)
      res.send(500, error.message);
    else if (renderProps == null) {
      res.send(404, 'Not found');
    } else {
      let serverRender = ReactDOMServer.renderToString(<RoutingContext {...renderProps}/>);
      res.render('index',{ content: serverRender });
    }
  });

});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
