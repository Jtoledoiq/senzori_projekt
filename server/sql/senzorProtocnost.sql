USE martina_database;
CREATE table martina_database.senzori10_20210504 (
	id INT(6) not null AUTO_INCREMENT PRIMARY KEY,
 	value_entered FLOAT(5) NOT NULL,
 	time_entered INT(10) NOT NULL DEFAULT '0', 
 	tip VARCHAR(50) NOT NULL DEFAULT '',
 	unit VARCHAR(10) NOT NULL DEFAULT '',
 	UNIQUE KEY(id),
 	KEY(time_entered)
); 

insert INTO senzori10_20210504 (value_entered,time_entered,tip,unit) VALUES (100.32,1620121154,'flow','m3/s');
insert INTO senzori10_20210504 (value_entered,time_entered,tip,unit) VALUES (140.56,1620124754,'flow','m3/s');
insert INTO senzori10_20210504 (value_entered,time_entered,tip,unit) VALUES (132.45,1620149954,'flow','m3/s');
insert INTO senzori10_20210504 (value_entered,time_entered,tip,unit) VALUES (102.01,1620160754,'flow','m3/s');
insert INTO senzori10_20210504 (value_entered,time_entered,tip,unit) VALUES (205.09,1620167954,'flow','m3/s');

SELECT * FROM senzori10_20210504;

DESCRIBE  martina_database.senzori10_20210504;



CREATE table martina_database.senzori10_20210505 (
	id INT(6) not null AUTO_INCREMENT PRIMARY KEY,
 	value_entered FLOAT(5) NOT NULL,
 	time_entered INT(10) NOT NULL DEFAULT '0', 
 	tip VARCHAR(50) NOT NULL DEFAULT '',
 	unit VARCHAR(10) NOT NULL DEFAULT '',
 	UNIQUE KEY(id),
 	KEY(time_entered)
); 

insert INTO senzori10_20210505 (value_entered,time_entered,tip,unit) VALUES (101.12,1620122154,'flow','m3/s');
insert INTO senzori10_20210505 (value_entered,time_entered,tip,unit) VALUES (142.51,1620124354,'flow','m3/s');
insert INTO senzori10_20210505 (value_entered,time_entered,tip,unit) VALUES (130.13,1620149954,'flow','m3/s');
insert INTO senzori10_20210505 (value_entered,time_entered,tip,unit) VALUES (102.41,1620160954,'flow','m3/s');
insert INTO senzori10_20210505 (value_entered,time_entered,tip,unit) VALUES (203.69,1620167495,'flow','m3/s');

CREATE table martina_database.senzori10_20210503 (
	id INT(6) not null AUTO_INCREMENT PRIMARY KEY,
 	value_entered FLOAT(5) NOT NULL,
 	time_entered INT(10) NOT NULL DEFAULT '0', 
 	tip VARCHAR(50) NOT NULL DEFAULT '',
 	unit VARCHAR(10) NOT NULL DEFAULT '',
 	UNIQUE KEY(id),
 	KEY(time_entered)
); 

insert INTO senzori10_20210503 (value_entered,time_entered,tip,unit) VALUES (9.22,1620121114,'flow','m3/s');
insert INTO senzori10_20210503 (value_entered,time_entered,tip,unit) VALUES (142.21,1620123754,'flow','m3/s');
insert INTO senzori10_20210503 (value_entered,time_entered,tip,unit) VALUES (134.37,1620146954,'flow','m3/s');
insert INTO senzori10_20210503 (value_entered,time_entered,tip,unit) VALUES (112.91,1620160554,'flow','m3/s');
insert INTO senzori10_20210503 (value_entered,time_entered,tip,unit) VALUES (221.99,1620167344,'flow','m3/s');

