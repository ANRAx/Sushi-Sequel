CREATE DATABASE IF NOT EXISTS sushi_db;
USE sushi_db;

DROP TABLE IF EXISTS sushi_db;

CREATE TABLE sushi(
    id int NOT NULL AUTO_INCREMENT,
    sushi_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);

