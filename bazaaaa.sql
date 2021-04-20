USE martina_projectmartina_project;
CREATE table martina_project.users (
	id INT(6) not null AUTO_INCREMENT PRIMARY key,
	FirstName VARCHAR(30) not null default '',
	LastName VARCHAR (30) not null default '',
	mail VARCHAR (30) not null default '',
	role INT(3) not null
); 

ALTER TABLE users 
	add column reg_date TIMESTAMP ;
ALTER TABLE users 
	add column pass VARCHAR(30) not null default '' ;


insert INTO users (FirstName,LastName,mail,role) VALUES ('Ana','Radanovic','ana@gmail.com',2);
insert INTO users (FirstName,LastName,mail,role) VALUES ('Jesus','nezprezime','jesus@gmail.com',1);
insert INTO users (FirstName,LastName,mail,pass,role) VALUES ('ivan','ivic','iivic@gmail.com','hhhh',2);

Update  users SET  pass='aaaa' WHERE id=1;
Update  users SET  pass='bbbb' WHERE id=2;
Update  users SET  pass='cccc' WHERE id=3;
Update  users SET  pass='dddd' WHERE id=4;
Update  users SET  pass='eeeeeee' WHERE id=1;
Update  users SET  pass='aaaa' WHERE id=38;
Update  users SET  pass='bbbb' WHERE id=39;

DELETE FROM users WHERE id=5;
SELECT * FROM users;
SELECT * FROM users WHERE id=1;
SHOW TABLES;
SELECT * FROM martina_project.users;
DESCRIBE martina_project.users;
SELECT SUBSTRING_INDEX(USER(), '@', -1) AS ip,  @@hostname as hostname, @@port as port, DATABASE() as current_database;

INSERT INTO users (FirstName,LastName,mail,pass,role) VALUES ('aaa','dddd','ghhh','sdaf',1);