// Requirements
var express = require('express');
var helmet = require('helmet');

// Routes
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

// Routes
app.use('/', home);
app.use('/about', about);
app.use('/archive', archive);
app.use('/blog', blog);
app.use('/contact', contact);
app.use('/cv', cv);
app.use('/portfolio', portfolio);
app.use('/press',press);
app.use('/api', api);

// Static Files
app.use('/bower_components', express.static(__dirname + '/../client/bower_components'));
app.use('/media', express.static(__dirname + '/../client/media'));
app.use('/scripts', express.static(__dirname + '/../client/scripts'));
app.use('/styles', express.static(__dirname + '/../client/styles'));

// Errors Handling
app.use('*', errors);

// App Listening
app.listen(3000, function () {
  console.log('Personal Web App listening on port 3000');
});
