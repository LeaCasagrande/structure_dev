-- creation de la database caisse
CREATE DATABASE blog;
USE blog;

-- creation de la table article
CREATE TABLE article(
id_article INT PRIMARY KEY auto_increment not null,
titre_article VARCHAR(50) NOT NULL,
contenu_article TEXT NOT NULL,
date_article DATETIME NOT NULL,
id_utilisateur INT NOT NULL
)engine=InnoDB;

-- creation de la table utilisateur
CREATE TABLE utilisateur(
id_utilisateur INT PRIMARY KEY auto_increment not null,
nom_utilisateur VARCHAR(50) NOT NULL,
prenom_utilisateur VARCHAR(50) NOT NULL,
mail_utilisateur VARCHAR(100) NOT NULL,
password_utilisateur VARCHAR(100) NOT NULL,
id_roles INT NOT NULL,
id_image INT NOT NULL
)engine=InnoDB;

-- creation de la table image
CREATE TABLE image(
id_image INT PRIMARY KEY auto_increment NOT NULL,
nom_image VARCHAR(50) NOT NULL,
url_image VARCHAR(150) NOT NULL,
id_article INT NOT NULL
)engine=InnoDB;

-- creation de la table roles
CREATE TABLE roles(
id_roles INT PRIMARY KEY auto_increment NOT NULL,
nom_roles VARCHAR(50) NOT NULL
)engine=InnoDB;

-- creation de la table categorie
CREATE TABLE categorie(
id_categorie INT PRIMARY KEY auto_increment NOT NULL,
nom_categorie VARCHAR(50) NOT NULL
)engine=InnoDB;

-- creation de la table commentaire
CREATE TABLE commentaire(
id_commentaire INT PRIMARY KEY auto_increment NOT NULL,
contenu_commentaire VARCHAR(255) NOT NULL,
date_commentaire DATETIME NOT NULL,
id_article INT NOT NULL,
id_utilisateur INT NOT NULL
)engine=InnoDB;

-- creation de la table d'association filtrer
CREATE TABLE filtrer(
id_categorie INT NOT NULL,
id_article INT NOT NULL,
PRIMARY KEY(id_categorie, id_article)
)engine=InnoDB;

-- ajout des contraintes foreign key article
ALTER TABLE article
ADD CONSTRAINT fk_rediger_utilisateur
FOREIGN KEY(id_utilisateur)
REFERENCES utilisateur(id_utilisateur);

-- ajout des contraintes foreign key utilisateur
ALTER TABLE utilisateur
ADD CONSTRAINT fk_posseder_roles
FOREIGN KEY(id_roles)
REFERENCES roles(id_roles);

ALTER TABLE utilisateur
ADD CONSTRAINT fk_completer_image
FOREIGN KEY(id_image)
REFERENCES image(id_image);

-- ajout des contraintes foreign key image
ALTER TABLE image
ADD CONSTRAINT fk_illustrer_article
FOREIGN KEY(id_article)
REFERENCES article(id_article);

-- ajout des contraintes foreign key commentaire
ALTER TABLE commentaire
ADD CONSTRAINT fk_agrementer_article
FOREIGN KEY(id_article)
REFERENCES article(id_article);

ALTER TABLE commentaire
ADD CONSTRAINT fk_ecrire_utilisateur
FOREIGN KEY(id_utilisateur)
REFERENCES utilisateur(id_utilisateur);

-- ajout des contraintes foreign key filtrer
ALTER TABLE filtrer
ADD CONSTRAINT fk_filtrer_article
FOREIGN KEY(id_article)
REFERENCES article(id_article);

ALTER TABLE filtrer
ADD CONSTRAINT fk_filtrer_categorie
FOREIGN KEY(id_categorie)
REFERENCES categorie(id_categorie);