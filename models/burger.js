var orm = require("./config/orm.js");


var burger = {
  addBurger: function(cb) {
    orm.addBurger('burger', function(res) {
      cb(res);
    });
  }
  devourBurger: function(cb) {
    orm.devourBurger('burger', function(res) {
      cb(res);
    });
  }
  showBurgers: function(cb) {
    orm.showBurgers('burger', function(res) {
      cb(res);
    });
  }
}


module.exports = burger;