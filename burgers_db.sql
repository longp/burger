CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT,
  burger_name varchar(255),
  devoured BOOLEAN,
  date DATETIME,
  PRIMARY KEY (id)
);


