CREATE DATABASE burger_db;
USE burger_db;
DROP TABLE burgers;
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(255) NOT NULL,
    devoured INT(1) DEFAULT 0
);