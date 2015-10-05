'use strict'

import express from 'express';

const app = express();
const pubDir = __dirname+'/../public';

app.set('views', pubDir+'/views');
app.set('view engine', 'jade');

app.use('/js', express.static(pubDir+'/js'));
app.use('/css', express.static(pubDir+'/css'));
app.use('/img', express.static(pubDir+'/img'));


app.all('/*', function (req, res, next) {
  res.render('index', { content: '<div>test</div>' });
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
