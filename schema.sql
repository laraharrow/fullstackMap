DROP DATABASE IF EXISTS programs;

CREATE DATABASE programs;

USE programs;

CREATE TABLE clients (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  url varchar(50) NOT NULL,
  mesa varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE servers (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  url varchar(50) NOT NULL,
  mesa varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE dbs (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  url varchar(50) NOT NULL,
  mesa varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
