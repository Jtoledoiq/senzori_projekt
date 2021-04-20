set names 'utf8';

create table users (id int not null AUTO_INCREMENT, name varchar(255) not null default '', email varchar (255) not null default '', password varchar (255) not null default '', token varchar(255) not null default '', primary key (id));


create table contacts (id int not null AUTO_INCREMENT, ime varchar(255) not null default '', prezime varchar(255) not null default '', mail varchar (255) not null default '', tel varchar(40) not null default '', opis varchar (4000) not null default '', primary key (id));


insert into users (name, email, password) values('Martina', 'martina@martina.com', PASSWORD('martina'));


insert into contacts (ime, prezime, mail, tel, opis) values('Stipe', 'Stipic', 'stipes@gmail.com', '123456777', 'dobar u sportu');

insert into contacts (ime, prezime, mail, tel, opis) values('Ana', 'Anic', 'ananic@gmail.com', '473765', 'svira violinu');

insert into contacts (ime, prezime, mail, tel, opis) values('ivan', 'Ivic', 'ivanivic@hotmail.com', '775675', 'jedan mali decko ....');

insert into contacts (ime, prezime, mail, tel, opis) values('Lana', 'Lozic', 'lozic@gmail.com', '503441', 'dobra mala cura..');

insert into contacts (ime, prezime, mail, tel, opis) values('marija', 'Maric', 'maricmare@gmail.com', '558275', 'ima pomeranca zvanog Luce');

insert into contacts (ime, prezime, mail, tel, opis) values('Pero', 'Peric', 'pperi01@fesb.hr', '435687', 'jedan mali decko ....');

insert into contacts (ime, prezime, mail, tel, opis) values('Jole', 'Krilic', 'karlok@hotmail.com', '756533', 'trenira nogomet');

insert into contacts (ime, prezime, mail, tel, opis) values('Ivica', 'Lukas', 'ilukas@gmail.com', '345987', 'voli nocne izlaske');