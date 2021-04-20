USE martina_project;
CREATE table martina_project.senzori (
	id INT(6) not null AUTO_INCREMENT PRIMARY key,
	temp FLOAT(3) not null,
	vlaznost FLOAT(3) not null,
	tlak FLOAT (5) not null 
); 

insert INTO senzori (temp,vlaznost,tlak) VALUES ('315.211','23.111','555.311');
insert INTO senzori (temp,vlaznost,tlak) VALUES ('35.1','22.2','534.3');
insert INTO senzori (temp,vlaznost,tlak) VALUES ('38.2','23.7','267.2');
insert INTO senzori (temp,vlaznost,tlak) VALUES ('39.0','43.5','369.8');

DESCRIBE martina_project.senzori;
SELECT * FROM senzori;


DROP Table martina_project.senzori