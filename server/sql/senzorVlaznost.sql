USE martina_database;
CREATE table martina_database.senzori9_20210504 (
	id INT(6) not null AUTO_INCREMENT PRIMARY KEY,
 	value_entered FLOAT(5) NOT NULL,
 	time_entered INT(10) NOT NULL DEFAULT '0', 
 	tip VARCHAR(50) NOT NULL DEFAULT '',
 	unit VARCHAR(10) NOT NULL DEFAULT '',
 	UNIQUE KEY(id),
 	KEY(time_entered)
); 

insert INTO senzori9_20210504 (value_entered,time_entered,tip,unit) VALUES (15.16,1620121154,'huminity','kg/m3');
insert INTO senzori9_20210504 (value_entered,time_entered,tip,unit) VALUES (14.56,1620124754,'huminity','kg/m3');
insert INTO senzori9_20210504 (value_entered,time_entered,tip,unit) VALUES (13.45,1620149954,'huminity','kg/m3');
insert INTO senzori9_20210504 (value_entered,time_entered,tip,unit) VALUES (15.01,1620160754,'huminity','kg/m3');
insert INTO senzori9_20210504 (value_entered,time_entered,tip,unit) VALUES (15.09,1620167954,'huminity','kg/m3');

SELECT *FROM senzori9_20210504;

DESCRIBE  martina_database.senzori9_20210503;


CREATE table martina_database.senzori9_20210503 (
	id INT(6) not null AUTO_INCREMENT PRIMARY KEY,
 	value_entered FLOAT(5) NOT NULL,
 	time_entered INT(10) NOT NULL DEFAULT '0', 
 	tip VARCHAR(50) NOT NULL DEFAULT '',
 	unit VARCHAR(10) NOT NULL DEFAULT '',
 	UNIQUE KEY(id),
 	KEY(time_entered)
); 

insert INTO senzori9_20210503 (value_entered,time_entered,tip,unit) VALUES (11.15,1620121151,'huminity','kg/m3');
insert INTO senzori9_20210503 (value_entered,time_entered,tip,unit) VALUES (12.54,1620124352,'huminity','kg/m3');
insert INTO senzori9_20210503 (value_entered,time_entered,tip,unit) VALUES (14.43,1620149454,'huminity','kg/m3');
insert INTO senzori9_20210503 (value_entered,time_entered,tip,unit) VALUES (18.02,1620160554,'huminity','kg/m3');
insert INTO senzori9_20210503 (value_entered,time_entered,tip,unit) VALUES (16.01,1620167655,'huminity','kg/m3');


CREATE table martina_database.senzori9_20210505 (
	id INT(6) not null AUTO_INCREMENT PRIMARY KEY,
 	value_entered FLOAT(5) NOT NULL,
 	time_entered INT(10) NOT NULL DEFAULT '0', 
 	tip VARCHAR(50) NOT NULL DEFAULT '',
 	unit VARCHAR(10) NOT NULL DEFAULT '',
 	UNIQUE KEY(id),
 	KEY(time_entered)
); 

insert INTO senzori9_20210505 (value_entered,time_entered,tip,unit) VALUES (17.12,1620121254,'huminity','kg/m3');
insert INTO senzori9_20210505 (value_entered,time_entered,tip,unit) VALUES (12.57,1620123454,'huminity','kg/m3');
insert INTO senzori9_20210505 (value_entered,time_entered,tip,unit) VALUES (13.43,1620149954,'huminity','kg/m3');
insert INTO senzori9_20210505 (value_entered,time_entered,tip,unit) VALUES (15.05,1620104154,'huminity','kg/m3');
insert INTO senzori9_20210505 (value_entered,time_entered,tip,unit) VALUES (19.08,1620167464,'huminity','kg/m3');

