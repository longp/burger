var connection= require('../config/connection.js');


var orm = {
  addBurger: function(burgerName, cb) {
    var query = "INSERT INTO burgers (burger_name, devoured) VALUES (?, FALSE)";
    connection.query(query, [burgerName], function(err, res) {
      if(err) throw err;
      cb(res);
    });
  },
  devourBurger: function(burgerName, cb) {
    var query = "UPDATE burgers SET devoured=false WHERE burger_name=?";
    connection.query(query, [burgerName], function(err, res) {
      if (err) throw  err;
      cb(res);
    });
  },
  showBurgers: function(cb) {
    var query = "SELECT * FROM burgers";
    connection.query(query, function(err, res) {
      if(err) throw err;
      cb(res);
    });
  } 
 
}


module.exports = orm;
