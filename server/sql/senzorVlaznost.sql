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

DESCRIBE  martina_database.senzori9_20210504;