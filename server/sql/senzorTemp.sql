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