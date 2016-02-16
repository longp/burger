var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js');


router.get('/', function (req, res) {
  burger.showBurgers(function (burgers_data) {
    res.render('index', {burgers_data});
    console.log(burgers_data[0].id)
  });
});

router.post('/add', function (req, res) {
  burger.addBurger(req.body.burger_name, function (result) {
    console.log(result);
    res.redirect('/');
  });
});

router.post('/devour', function (req, res) {
  burger.devourBurger(req.body.burger_name, function (result) {
    console.log(result);
    res.redirect('/');
  });
});

module.exports = router;