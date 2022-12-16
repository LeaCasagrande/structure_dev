-- creation de la database caisse
CREATE DATABASE caisse;
USE caisse;

-- creation de la table produit
CREATE TABLE produit(
id_produit INT PRIMARY KEY auto_increment not null,
nom_produit VARCHAR(50) NOT NULL,
prix_produit FLOAT NOT NULL,
description_produit TEXT NOT NULL
)engine=InnoDB;

-- creation de la table ticket
CREATE TABLE ticket(
id_ticket INT PRIMARY KEY auto_increment not null,
date_ticket DATETIME NOT NULL,
id_vendeur INT NOT NULL
)engine=InnoDB;

-- creation de la table vendeur
CREATE TABLE vendeur(
id_vendeur INT PRIMARY KEY auto_increment not null,
nom_vendeur VARCHAR(50) NOT NULL,
prenom_vendeur VARCHAR(50) NOT NULL
)engine=InnoDB;

-- creation de la table association ajouter
CREATE TABLE ajouter(
id_ticket INT NOT NULL,
id_vendeur INT NOT NULL,
PRIMARY KEY(id_ticket, id_vendeur),
id_produit INT NOT NULL,
quantite INT NOT NULL
)engine=InnoDB;

-- ajout des contraintes foreign key
ALTER TABLE ticket
ADD constraint fk_editer_vendeur
FOREIGN KEY(id_vendeur)
REFERENCES vendeur(id_vendeur);

ALTER TABLE ajouter
ADD constraint fk_ajouter_ticket
FOREIGN KEY(id_ticket)
REFERENCES ticket(id_ticket);

ALTER TABLE ajouter
ADD constraint fk_ajouter_produit
FOREIGN KEY(id_produit)
REFERENCES produit(id_produit);