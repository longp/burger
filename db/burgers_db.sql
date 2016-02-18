CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name varchar(255),
  ready BOOLEAN,
  devoured BOOLEAN,
  date TIMESTAMP,
  PRIMARY KEY (id)
);

-- INSERT INTO burgers (burger_name, ready, devoured) VALUES ('TEST', FALSE, TRUE)
