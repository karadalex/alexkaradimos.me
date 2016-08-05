// Package Requirements
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');

// Routes Requirements
var index = require('./routes/index');
var home = require('./routes/home');
var about = require('./routes/about');
var archive = require('./routes/archive');
var blog = require('./routes/blog');
var contact = require('./routes/contact');
var cv = require('./routes/cv');
var portfolio = require('./routes/portfolio');
var press = require('./routes/press');
var api = require('./routes/api');
var errors = require('./routes/errors');

var app = express();
app.use(helmet());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', index);
app.use('/home', home);
app.use('/about(.html)?', about);
app.use('/archive(.html)?', archive);
app.use('/blog(.html)?', blog);
app.use('/contact(.html)?', contact);
app.use('/cv(.html)?', cv);
app.use('/portfolio(.html)?', portfolio);
app.use('/press(.html)?',press);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      title: err.message,
      image: 'night-sky.jpeg',
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    title: err.message,
    image: 'night-sky.jpeg',
    error: {status: err.status}
  });
});


module.exports = app;
