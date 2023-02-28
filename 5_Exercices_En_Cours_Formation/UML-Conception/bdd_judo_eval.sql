-- creation de la database judokas
CREATE DATABASE judo;

-- creation de la table judoka
USE judo;
CREATE TABLE judoka(
id_judoka INT PRIMARY KEY auto_increment not null,
nom_judoka VARCHAR(50) NOT NULL,
prenom_judoka VARCHAR(50) NOT NULL,
age_judoka INT NOT NULL,
sexe_judoka TINYINT(1) NOT NULL,
id_niveau INT NOT NULL
)engine=InnoDB;

-- creation de la table niveau
CREATE TABLE niveau(
id_niveau INT PRIMARY KEY auto_increment not null,
couleur_ceinture_niveau VARCHAR(50) NOT NULL
)engine=InnoDB;

-- creation de la table competition
CREATE TABLE competition(
id_competition INT PRIMARY KEY auto_increment not null,
nom_competition VARCHAR(50) NOT NULL,
date_debut_competition DATE NOT NULL,
date_fin_competition DATE NOT NULL
)engine=InnoDB;

-- creation de la table association participer
CREATE TABLE participer(
id_judoka INT NOT NULL,
id_competition INT NOT NULL,
PRIMARY KEY(id_judoka, id_competition)
)engine=InnoDB;

-- ajout des contraintes foreign key
ALTER TABLE judoka
ADD constraint fk_posseder_niveau
FOREIGN KEY(id_niveau)
REFERENCES niveau(id_niveau);

ALTER TABLE participer
ADD CONSTRAINT fk_participer_competition
FOREIGN KEY(id_competition)
REFERENCES competition(id_competition);

ALTER TABLE participer
ADD CONSTRAINT fk_participer_judoka
FOREIGN KEY(id_judoka)
REFERENCES judoka(id_judoka);

-- requêtes de mise à jour
-- ajouter
insert into niveau (couleur_ceinture_niveau) values
('blanche'),
('jaune'),
('orange'),
('verte'),
('bleue'),
('marron'),
('noire');

insert into judoka (nom_judoka, prenom_judoka, age_judoka, sexe_judoka, id_niveau) values
('Lahance', 'Dominique', 16, 1, 2),
('Porter','Gilbert', 18, 0, 3),
('Lemaître', 'Anne', 15, 1, 4),
('Robert', 'Juliette', 12, 1, 1),
('Montminy', 'Pierre', 17, 0, 4),
('Charette', 'Pascal', 21, 0, 6),
('Guay', 'Emilie', 19, 1, 6),
('Maheu', 'Louise', 14, 1, 4),
('Poulin', 'Raymond', 26, 0, 7),
('Dupret', 'Alain', 20, 0, 6);

insert into competition (nom_competition, date_debut_competition, date_fin_competition) values
('judo31', '2021-02-06', '2021-02-07'),
('judo11', '2021-02-27', '2021-02-28'),
('judo81', '2021-03-20', '2021-03-21'),
('judo82', '2021-04-17', '2021-04-18');

insert into participer (id_competition, id_judoka) values
(1, 1),
(1, 3),
(1, 4),
(2, 2),
(2, 5),
(2, 6),
(2, 9),
(3, 10),
(3, 9),
(4, 1),
(4, 3),
(4, 8),
(4, 4);

-- modifier
update judoka
set id_niveau = id_niveau + 1
where id_judoka < 6;

-- ajouter/supprimer
insert into judoka (nom_judoka, prenom_judoka, age_judoka, sexe_judoka, id_niveau) values
('Skywalker', 'Luke', 25, 0, 7),
('Leia', 'Organa', 25, 1, 6);

delete from judoka where id_judoka in (11, 12);

