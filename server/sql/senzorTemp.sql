USE martina_database;
CREATE table martina_database.senzori7_20210504 (
	id INT(6) not null AUTO_INCREMENT PRIMARY KEY,
 	value_entered FLOAT(5) NOT NULL,
 	time_entered INT(10) NOT NULL DEFAULT '0', 
 	tip VARCHAR(50) NOT NULL DEFAULT '',
 	unit VARCHAR(10) NOT NULL DEFAULT '',
 	UNIQUE KEY(id),
 	KEY(time_entered)
); 

insert INTO senzori7_20210504 (value_entered,time_entered,tip,unit) VALUES (35.7,1620121154,'temperatura','C');
insert INTO senzori7_20210504 (value_entered,time_entered,tip,unit) VALUES (36.7,1620124754,'temperatura','C');
insert INTO senzori7_20210504 (value_entered,time_entered,tip,unit) VALUES (35.9,1620149954,'temperatura','C');
insert INTO senzori7_20210504 (value_entered,time_entered,tip,unit) VALUES (34.9,1620160754,'temperatura','C');
insert INTO senzori7_20210504 (value_entered,time_entered,tip,unit) VALUES (35.8,1620167954,'temperatura','C');

SELECT* FROM senzori7_20210504;
DESCRIBE  martina_database.senzori7_20210504;



CREATE table martina_database.senzori7_20210505 (
	id INT(6) not null AUTO_INCREMENT PRIMARY KEY,
 	value_entered FLOAT(5) NOT NULL,
 	time_entered INT(10) NOT NULL DEFAULT '0', 
 	tip VARCHAR(50) NOT NULL DEFAULT '',
 	unit VARCHAR(10) NOT NULL DEFAULT '',
 	UNIQUE KEY(id),
 	KEY(time_entered)
); 

insert INTO senzori7_20210505 (value_entered,time_entered,tip,unit) VALUES (31.5,1620121134,'temperatura','C');
insert INTO senzori7_20210505 (value_entered,time_entered,tip,unit) VALUES (32.4,1620124755,'temperatura','C');
insert INTO senzori7_20210505 (value_entered,time_entered,tip,unit) VALUES (33.3,1620149966,'temperatura','C');
insert INTO senzori7_20210505 (value_entered,time_entered,tip,unit) VALUES (34.8,1620160777,'temperatura','C');
insert INTO senzori7_20210505 (value_entered,time_entered,tip,unit) VALUES (35.2,1620167588,'temperatura','C');




CREATE table martina_database.senzori7_20210503 (
	id INT(6) not null AUTO_INCREMENT PRIMARY KEY,
 	value_entered FLOAT(5) NOT NULL,
 	time_entered INT(10) NOT NULL DEFAULT '0', 
 	tip VARCHAR(50) NOT NULL DEFAULT '',
 	unit VARCHAR(10) NOT NULL DEFAULT '',
 	UNIQUE KEY(id),
 	KEY(time_entered)
); 

insert INTO senzori7_20210503 (value_entered,time_entered,tip,unit) VALUES (39.1,1620121111,'temperatura','C');
insert INTO senzori7_20210503 (value_entered,time_entered,tip,unit) VALUES (31.2,1620124721,'temperatura','C');
insert INTO senzori7_20210503 (value_entered,time_entered,tip,unit) VALUES (34.3,1620149932,'temperatura','C');
insert INTO senzori7_20210503 (value_entered,time_entered,tip,unit) VALUES (35.4,1620160743,'temperatura','C');
insert INTO senzori7_20210503 (value_entered,time_entered,tip,unit) VALUES (32.5,1620167945,'temperatura','C');


SELECT * FROM senzori10_20210505;


CREATE table martina_database.senzori7_20211003 (
	id INT(6) not null AUTO_INCREMENT PRIMARY KEY,
 	value_entered FLOAT(5) NOT NULL,
 	time_entered INT(10) NOT NULL DEFAULT '0', 
 	tip VARCHAR(50) NOT NULL DEFAULT '',
 	unit VARCHAR(10) NOT NULL DEFAULT '',
 	UNIQUE KEY(id),
 	KEY(time_entered)
); 

insert INTO senzori7_20211003 (value_entered,time_entered,tip,unit) VALUES (30.1,1620121113,'temperatura','C');
insert INTO senzori7_20211003 (value_entered,time_entered,tip,unit) VALUES (30.2,1620124724,'temperatura','C');
insert INTO senzori7_20211003 (value_entered,time_entered,tip,unit) VALUES (33.3,1620149935,'temperatura','C');
insert INTO senzori7_20211003 (value_entered,time_entered,tip,unit) VALUES (32.4,1620160746,'temperatura','C');
insert INTO senzori7_20211003 (value_entered,time_entered,tip,unit) VALUES (31.5,1620167947,'temperatura','C');


SELECT * FROM senzori10_20210505