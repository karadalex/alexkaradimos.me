var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cv', {
    title: 'Curriculum Vitae',
    image: 'admiring.jpeg',
    classList: 'h1-header-xs'
  });
});

module.exports = router;
