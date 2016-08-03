var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('archive', {
    title: 'Archive',
    image: 'burn.jpeg'
  });
});

module.exports = router;
