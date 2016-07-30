var express = require('express');
var app = express();


app.get('/', function (req, res, next) {
  var options = {
    root: __dirname + '/client/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };
  res.sendFile('index.html', options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
