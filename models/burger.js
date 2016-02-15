var orm = require("../config/orm.js");


var burger = {
  addBurger: function(burgerName, cb) {
    orm.addBurger(burgerName, function(res) {
      cb(res);
    });
  },
  devourBurger: function(cb) {
    orm.devourBurger(burgerName, function(res) {
      cb(res);
    });
  },
  showBurgers: function(cb) {
    orm.showBurgers(function(res) {
      cb(res);
    });
  }
}


module.exports = burger;