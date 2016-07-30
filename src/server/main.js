var express = require('express');

var home = require('./routes/home');

var app = express();


app.use('/', home);

app.use('/bower_components', express.static(__dirname + '/../client/bower_components'));
app.use('/media', express.static(__dirname + '/../client/media'));
app.use('/scripts', express.static(__dirname + '/../client/scripts'));
app.use('/styles', express.static(__dirname + '/../client/styles'));
app.use('/vendor', express.static(__dirname + '/../client/vendor'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
