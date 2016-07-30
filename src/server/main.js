// Requirements
var express = require('express');
var helmet = require('helmet');

// Routes
var home = require('./routes/home');
var about = require('./routes/about');
var api = require('./routes/api');

var app = express();
app.use(helmet());

// Routes
app.use('/', home);
app.use('/about', about);
app.use('/api', api);

// Static Files
app.use('/bower_components', express.static(__dirname + '/../client/bower_components'));
app.use('/media', express.static(__dirname + '/../client/media'));
app.use('/scripts', express.static(__dirname + '/../client/scripts'));
app.use('/styles', express.static(__dirname + '/../client/styles'));
app.use('/vendor', express.static(__dirname + '/../client/vendor'));


/*******************************
* Erros Section
*******************************/
app.get('*', function(req, res, next) {
  var err = new Error();
  err.status = 404;
  next(err);
});
// handling 404 errors
app.use(function(err, req, res, next) {
  if(err.status !== 404) {
    return next();
  }
  res.send(err.message || 'Page not Found');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
