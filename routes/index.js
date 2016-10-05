var express = require('express');
var router = express.Router();

/* GET Main Page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Karl Kovacs'});
});

// GET Work Page
router.get('/work', function (req, res, next) {

  res.render('work', {title: 'Work'});

});

// GET Contact
router.get('/contact', function (req, res, next) {

  res.render('contact', {title: 'Contact'});

});


module.exports = router;
