var connection= require('./connection.js');


var orm {
  addBurger: function(burgerName, cb) {
    var query = "INSERT INTO burgers (burger_name, devoured) VALUES (?, FALSE)";
    connection.query(query, [burgerName], function(err, res) {
      if(err) throw err;
      cb(res);
    });
  }
  devourBurger: function((burgerName, cb) {
    var query = "UPDATE burgers SET devoured=true WHERE burger_name=?";
    connection.query(query, [burgerName], function(err, res) {
      if (err) throw  err;
      cb(res);
    });
  }
  showBurgers: function(tableInput, cb) {
    var query = "SELECT * FROM ?";
    connection.query(query, [tableInput], function(err, res) {
      if(err) throw err;
      cb(res);
    });
  } 

}


module.exports = orm;
