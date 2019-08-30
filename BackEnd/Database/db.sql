-- Creating database
CREATE DATABASE coati_database;
-- Using database
USE coati_database;
-- Creating table users 
CREATE TABLE IF NOT EXISTS TBL_USERS(
	id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	name VARCHAR (30) NOT NULL,
	last_name VARCHAR (60) NOT NULL,
	email VARCHAR (60) NOT NULL,
	password VARCHAR (15) NOT NULL
);
-- Creating table roles
CREATE TABLE IF NOT EXISTS TBL_ROLES(
	id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	name VARCHAR (30) NOT NULL
);
-- Insert Roles
INSERT INTO TBL_ROLES VALUES 
(1, "ADMIN"),
(2, "USER");

-- Creating table to assign roles to users 
CREATE TABLE IF NOT EXISTS TBL_USER_ROLE(
	id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	user_id INTEGER UNSIGNED NOT NULL,
	role_id INTEGER UNSIGNED NOT NULL
);
-- Add Foreign key to table tbl_users_roles
ALTER TABLE TBL_USER_ROLE ADD CONSTRAINT FOREIGN KEY (user_id) REFERENCES TBL_USERS(id) ON DELETE CASCADE; 
ALTER TABLE TBL_USER_ROLE ADD CONSTRAINT FOREIGN KEY (role_id) REFERENCES TBL_ROLES(id) ON DELETE CASCADE; 