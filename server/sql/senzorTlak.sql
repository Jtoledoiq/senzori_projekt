USE martina_database;
CREATE table martina_database.senzori8_20210504 (
	id INT(6) not null AUTO_INCREMENT PRIMARY KEY,
 	value_entered FLOAT(5) NOT NULL,
 	time_entered INT(10) NOT NULL DEFAULT '0', 
 	tip VARCHAR(50) NOT NULL DEFAULT '',
 	unit VARCHAR(10) NOT NULL DEFAULT '',
 	UNIQUE KEY(id),
 	KEY(time_entered)
); 

insert INTO senzori8_20210504 (value_entered,time_entered,tip,unit) VALUES (1015,1620121154,'pressure','hPa');
insert INTO senzori8_20210504 (value_entered,time_entered,tip,unit) VALUES (1016,1620124754,'pressure','hPa');
insert INTO senzori8_20210504 (value_entered,time_entered,tip,unit) VALUES (1013,1620149954,'pressure','hPa');
insert INTO senzori8_20210504 (value_entered,time_entered,tip,unit) VALUES (1015,1620160754,'pressure','hPa');
insert INTO senzori8_20210504 (value_entered,time_entered,tip,unit) VALUES (1014,1620167954,'pressure','hPa');

SELECT * from senzori8_20210504;

DESCRIBE  martina_database.senzori8_20210504;


CREATE table martina_database.senzori8_20210505 (
	id INT(6) not null AUTO_INCREMENT PRIMARY KEY,
 	value_entered FLOAT(5) NOT NULL,
 	time_entered INT(10) NOT NULL DEFAULT '0', 
 	tip VARCHAR(50) NOT NULL DEFAULT '',
 	unit VARCHAR(10) NOT NULL DEFAULT '',
 	UNIQUE KEY(id),
 	KEY(time_entered)
); 

insert INTO senzori8_20210505 (value_entered,time_entered,tip,unit) VALUES (1011,1620121132,'pressure','hPa');
insert INTO senzori8_20210505 (value_entered,time_entered,tip,unit) VALUES (1012,1620124745,'pressure','hPa');
insert INTO senzori8_20210505 (value_entered,time_entered,tip,unit) VALUES (1014,1620149954,'pressure','hPa');
insert INTO senzori8_20210505 (value_entered,time_entered,tip,unit) VALUES (1013,1620160733,'pressure','hPa');
insert INTO senzori8_20210505 (value_entered,time_entered,tip,unit) VALUES (1017,1620167954, 'pressure','hPa');


CREATE table martina_database.senzori8_20210503 (
	id INT(6) not null AUTO_INCREMENT PRIMARY KEY,
 	value_entered FLOAT(5) NOT NULL,
 	time_entered INT(10) NOT NULL DEFAULT '0', 
 	tip VARCHAR(50) NOT NULL DEFAULT '',
 	unit VARCHAR(10) NOT NULL DEFAULT '',
 	UNIQUE KEY(id),
 	KEY(time_entered)
); 

insert INTO senzori8_20210503 (value_entered,time_entered,tip,unit) VALUES (1011,1620121165,'pressure','hPa');
insert INTO senzori8_20210503 (value_entered,time_entered,tip,unit) VALUES (1011,1620124787,'pressure','hPa');
insert INTO senzori8_20210503 (value_entered,time_entered,tip,unit) VALUES (1011,1620149984,'pressure','hPa');
insert INTO senzori8_20210503 (value_entered,time_entered,tip,unit) VALUES (1011,1620167527,'pressure','hPa');
insert INTO senzori8_20210503 (value_entered,time_entered,tip,unit) VALUES (1011,1620167988,'pressure','hPa');
