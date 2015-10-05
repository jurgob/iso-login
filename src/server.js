'use strict'

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import LoginPage from './shared/components/LoginPage';

const app = express();
const pubDir = __dirname+'/../public';

app.set('views', pubDir+'/views');
app.set('view engine', 'jade');

app.use('/js', express.static(pubDir+'/js'));
app.use('/css', express.static(pubDir+'/css'));
app.use('/img', express.static(pubDir+'/img'));


app.all('/*', function (req, res, next) {
  let renderedHtml = ReactDOMServer.renderToString(<LoginPage />);
  res.render('index', { content: renderedHtml });
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
