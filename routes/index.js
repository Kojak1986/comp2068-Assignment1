var express = require('express');
var router = express.Router();

/* GET Main Page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Karl Kovacs'});
});

//GET About Me Page
router.get('/about', function (req, res, next) {

  res.render('about', {title: 'About Me'});

});

//GET Services Page
router.get('/services', function (req, res, next) {

  res.render('services', {title: 'Services'});

});

// GET Products Page
router.get('/products', function (req, res, next) {

  res.render('products', {title: 'Products'});

});

// GET Contact Page
router.get('/contact', function (req, res, next) {

  res.render('contact', {title: 'Contact'});

});







module.exports = router;
