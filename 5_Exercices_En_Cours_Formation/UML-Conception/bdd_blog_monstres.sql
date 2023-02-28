create database blog_monstre;
use blog_monstre;

CREATE TABLE utilisateur(
id_utilisateur INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
pseudo_utilisateur VARCHAR(50) NOT NULL,
mail_utilisateur VARCHAR(50) NOT NULL,
password_utilisateur VARCHAR(100) NOT NULL,
id_roles INT NOT NULL,
id_image INT NOT NULL
)engine=InnoDB;

CREATE TABLE image(
id_image INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_image VARCHAR(100) NOT NULL,
url_image VARCHAR(100) NOT NULL
)engine=InnoDB;

CREATE TABLE roles(
id_roles INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_roles VARCHAR(100) NOT NULL
)engine=InnoDB;

CREATE TABLE article(
id_article INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
titre_article VARCHAR(50) NOT NULL,
contenu_article VARCHAR(50) NOT NULL,
date_article datetime NOT NULL,
id_utilisateur INT NOT NULL
)engine=InnoDB;

CREATE TABLE categorie(
id_categorie INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_categorie VARCHAR(50) NOT NULL
)engine=InnoDB;

CREATE TABLE commentaire(
id_commentaire INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
date_commentaire datetime NOT NULL,
contenu_commentaire TEXT NOT NULL
)engine=InnoDB;

CREATE TABLE imager(
id_article INT NOT NULL,
id_image int NOT NULL,
PRIMARY KEY(id_article, id_image)
)engine=InnoDB;

CREATE TABLE ecrire(
id_commentaire INT NOT NULL,
id_utilisateur INT NOT NULL,
PRIMARY KEY(id_commentaire, id_utilisateur)
)engine=InnoDB;

CREATE TABLE associer(
id_categorie INT NOT NULL,
id_article INT NOT NULL,
PRIMARY KEY(id_categorie, id_article)
)engine=InnoDB;

ALTER TABLE utilisateur
ADD CONSTRAINT fk_posseder_image
FOREIGN KEY(id_image)
REFERENCES image(id_image);

ALTER TABLE utilisateur
ADD CONSTRAINT fk_attribuer_roles
FOREIGN KEY(id_roles)
REFERENCES roles(id_roles);

ALTER TABLE article
ADD CONSTRAINT fk_rediger_utilisateur
FOREIGN KEY(id_utilisateur)
REFERENCES utilisateur(id_utilisateur);

ALTER TABLE imager
ADD CONSTRAINT fk_imager_image
FOREIGN KEY(id_image)
REFERENCES image(id_image);

ALTER TABLE imager
ADD CONSTRAINT fk_imager_article
FOREIGN KEY(id_article)
REFERENCES article(id_article);

ALTER TABLE ecrire
ADD CONSTRAINT fk_ecrire_utilisateur
FOREIGN KEY(id_utilisateur)
REFERENCES utilisateur(id_utilisateur);

ALTER TABLE ecrire
ADD CONSTRAINT fk_ecrire_commentaire
FOREIGN KEY(id_commentaire)
REFERENCES commentaire(id_commentaire);

insert into roles (id_roles, nom_roles) values
(1,'admin'),
(2, 'utilisateur');

insert into image (id_image, nom_image, url_image) values
(1, 'image_4', 'https://lagendageek.com/wp-content/uploads/2021/08/boblennon.jpg');

insert into utilisateur (id_utilisateur, pseudo_utilisateur, mail_utilisateur, password_utilisateur, id_roles, id_image) values
(1, 'bobbidou', 'bobie@gmail.com', 'azerty77', 2, 1),
(2, 'Micael', 'aaaaaaaaaaaaaa@gmail.com', 'azerty77', 1, 1);

update utilisateur 
set password_utilisateur = MD5(password_utilisateur)
where pseudo_utilisateur = 'bobbidou';

delete from utilisateur 
where pseudo_utilisateur = 'Micael';