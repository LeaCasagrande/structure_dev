-- creation de la database foot
CREATE DATABASE foot;
USE foot;

-- creation de la table joueur
CREATE TABLE joueur(
id_joueur INT PRIMARY KEY auto_increment not null,
nom_joueur VARCHAR(50) NOT NULL,
prenom_joueur VARCHAR(50) NOT NULL,
age_joueur INT NOT NULL,
id_poste INT NOT NULL,
id_equipe INT NOT NULL
)engine=InnoDB;

-- creation de la table equipe
CREATE TABLE equipe(
id_equipe INT PRIMARY KEY auto_increment not null,
nom_equipe VARCHAR(50) NOT NULL
)engine=InnoDB;

-- creation de la table poste
CREATE TABLE poste(
id_poste INT PRIMARY KEY auto_increment not null,
nom_poste VARCHAR(50) NOT NULL
)engine=InnoDB;

-- creation de la table matchs
CREATE TABLE matchs(
id_matchs INT PRIMARY KEY auto_increment not null,
date_matchs DATETIME not null,
id_competition INT,
id_stade INT,
id_phases INT
)engine=InnoDB;

-- creation de la table phases
CREATE TABLE phases(
id_phases INT PRIMARY KEY auto_increment not null,
nom_phases VARCHAR(50) not null
)engine=InnoDB;

-- creation de la table competition
CREATE TABLE competition(
id_competition INT PRIMARY KEY auto_increment not null,
nom_competition VARCHAR(50) not null,
date_competition DATETIME not null
)engine=InnoDB;

-- creation de la table stade
CREATE TABLE stade(
id_stade INT PRIMARY KEY auto_increment not null,
nom_stade VARCHAR(50) not null,
nom_rue_stade VARCHAR(50) not null,
num_rue_stade VARCHAR(50) not null,
cp_stade VARCHAR(50) not null,
ville_stade VARCHAR(50) not null
)engine=InnoDB;

-- creation de la table d'association participer
CREATE TABLE participer(
id_equipe_1 INT not null,
id_equipe_2 INT not null,
id_matchs INT not null,
PRIMARY KEY(id_equipe_1, id_equipe_2, id_matchs),
score_equipe_1 INT not null,
score_equipe_2 INT not null
)engine=InnoDB;

-- ajout des contraintes foreign key joueur
ALTER TABLE joueur
ADD CONSTRAINT fk_qualifier_poste
FOREIGN KEY(id_poste)
REFERENCES poste(id_poste);

ALTER TABLE joueur
ADD CONSTRAINT fk_integrer_equipe
FOREIGN KEY(id_equipe)
REFERENCES equipe(id_equipe);

-- ajout des contraintes foreign key matchs
ALTER TABLE matchs
ADD CONSTRAINT fk_completer_phases
FOREIGN KEY(id_phases)
REFERENCES phases(id_phases);

ALTER TABLE matchs
ADD CONSTRAINT fk_localiser_stade
FOREIGN KEY(id_stade)
REFERENCES stade(id_stade);

ALTER TABLE matchs
ADD CONSTRAINT fk_contenir_competition
FOREIGN KEY(id_competition)
REFERENCES competition(id_competition);

-- ajout des contraintes foreign key participer
ALTER TABLE participer
ADD CONSTRAINT fk_participer_matchs
FOREIGN KEY(id_matchs)
REFERENCES matchs(id_matchs);

ALTER TABLE participer
ADD CONSTRAINT fk_participer_equipe_1
FOREIGN KEY(id_equipe_1)
REFERENCES equipe(id_equipe);

ALTER TABLE participer
ADD CONSTRAINT fk_participer_equipe_2
FOREIGN KEY(id_equipe_2)
REFERENCES equipe(id_equipe);