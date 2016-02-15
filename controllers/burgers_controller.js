var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js');


router.get('/', function (req, res) {
  burger.showBurgers(function (burgers_data) {
    res.render('index', {burgers_data});
  });
});

router.get('/add', function (req, res) {
  burger.addBurger(req.body.burger_name, function (result) {
    console.log(result);
    res.redirect('/');
  });
});

router.get('/devour', function (req, res) {
  burger.devourBurger(req.body.burger_name, function (result) {
    console.log(result);
    res.redirect('/');
  });
});

module.exports = router;