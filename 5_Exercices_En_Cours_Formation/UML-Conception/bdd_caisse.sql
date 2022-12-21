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

-- Exercice requête de MAJ insert
insert into vendeur(nom_vendeur, prenom_vendeur) values 
('Lambert', 'Valentin'),
('Crépin', 'Marie'),
('Gribelin', 'Jade'),
('Chapelle', 'Yves'),
('Chauveau', 'Bruno');

insert into produit(nom_produit, prix_produit, description_produit) values
('beurre', 2.09, 'Plaquette de beurre 250g'),
('potimarron', 2.49, 'Potimarron bio pièce'),
('confiture', 1.89, 'Pot de confiture fraise 370g'),
('spaghetti', 0.92, 'Paquet de spaghetti'),
('pesto', 1.75, 'Pot de pesto vert');

insert into ticket(date_ticket, id_vendeur) values
('2022-12-20 10:30:05', 1),
('2022-12-20 10:30:05', 2),
('2022-12-20 10:30:05', 3),
('2022-12-20 10:30:05', 4);

insert into ajouter(id_produit, id_ticket, quantite) values
(1, 1, 2),
(2, 1, 2),
(3, 1, 4),
(4, 1, 2),
(5, 1, 3),

(1, 2, 1),
(2, 2, 1),
(3, 2, 4),
(4, 2, 8),
(5, 2, 4),

(1, 3, 2),
(2, 3, 5),
(3, 3, 4),
(4, 3, 2),
(5, 3, 3),

(1, 4, 2),
(2, 4, 2),
(3, 4, 4),
(4, 4, 7),
(5, 4, 3);

-- Exercice requête de MAJ update et delete
-- mettre à jour les tickets 1 et 2 et remplacer le vendeur par le vendeur qui à pour id_vendeur =4
update ticket set id_vendeur = 4 where id_ticket IN (1, 2);

-- ajouter 2 vendeurs et supprimez les (1 seule requête pour supprimer)
insert into vendeur(nom_vendeur, prenom_vendeur) values 
('Laffitte', 'Denis'),
('Beauchamp', 'Mathilde');
delete from vendeur where nom_vendeur IN ('Laffitte','Beauchamp');

-- remplacer le prenom_utilisateur de tous les vendeurs dont le nom_utilisateur commence par 'a' par 'test'
update vendeur set prenom_vendeur='test' where nom_vendeur LIKE 'A%';

-- mettre en majuscule le nom de chaque vendeur
update vendeur set nom_vendeur = UPPER(nom_vendeur);

-- ajouter 1 € à tous les produits
update produit set prix_produit = prix_produit + 1;