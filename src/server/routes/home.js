var express = require('express');
var router = express.Router();

// Initial Page
router.get('/', function(req, res, next) {
  var options = {
    root: __dirname + '/../../client/',
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
      console.log('GET', '/');
    }
  });
});

// Home Page
router.get('/home', function(req, res, next) {
  var options = {
    root: __dirname + '/../../client/views',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };
  var fileName = 'home.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('GET', '/'+fileName);
    }
  });
});

module.exports = router;
