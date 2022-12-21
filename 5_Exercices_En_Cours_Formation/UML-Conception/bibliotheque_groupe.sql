create database bibliotheque;
use bibliotheque;

create table livre(
id_livre INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
titre_livre VARCHAR(50) NOT NULL,
date_livre date NOT NULL,
resume_livre text NOT NULL,
nb_pages_livre INT NOT NULL,
id_image INT NOT NULL,
id_editeur INT NOT NULL,
id_type_livre INT NOT NULL
)engine=InnoDB;

create table administrateur(
id_administrateur INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_administrateur VARCHAR(50) NOT NULL,
prenom_administrateur VARCHAR(50) NOT NULL,
mail_administrateur VARCHAR(50) NOT NULL,
password_administrateur VARCHAR(100) NOT NULL
)engine=InnoDB;

create table image(
id_image INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_image VARCHAR(50) NOT NULL,
url_image VARCHAR(150) NOT NULL
)engine=InnoDB;

create table article(
id_article INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
titre_article VARCHAR(50) NOT NULL,
date_article datetime NOT NULL,
contenu_article text NOT NULL,
id_image INT NOT NULL
)engine=InnoDB;

create table commentaire(
id_commentaire INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
date_commentaire datetime NOT NULL,
contenu_commentaire text NOT NULL,
id_administrateur INT NOT NULL
)engine=InnoDB;

create table auteur(
id_auteur INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_auteur VARCHAR(50) NOT NULL,
prenom_auteur VARCHAR(50) NOT NULL
)engine=InnoDB;

create table editeur(
id_editeur INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_editeur VARCHAR(50) NOT NULL
)engine=InnoDB;

create table type_livre(
id_type_livre INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_type_livre VARCHAR(50) NOT NULL
)engine=InnoDB;

create table genre_livre(
id_genre_livre INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_genre_livre VARCHAR(50) NOT NULL
)engine=InnoDB;

create table critique(
id_critique INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
date_critique datetime NOT NULL,
contenu_critique text not null,
note_critique INT NOT NULL,
id_livre INT NOT NULL
)engine=InnoDB;

create table ecrire(
id_auteur INT NOT NULL,
id_livre INT NOT NULL,
PRIMARY KEY(id_auteur, id_livre)
)engine=InnoDB;

create table categoriser(
id_genre_livre INT NOT NULL,
id_livre INT NOT NULL,
PRIMARY KEY(id_genre_livre, id_livre)
)engine=InnoDB;

create table gerer(
id_administrateur INT NOT NULL,
id_livre INT NOT NULL,
PRIMARY KEY(id_administrateur, id_livre)
)engine=InnoDB;

create table interagir(
id_administrateur INT NOT NULL,
id_article INT NOT NULL,
PRIMARY KEY(id_administrateur, id_article)
)engine=InnoDB;

create table commenter(
id_commentaire INT NOT NULL,
id_article INT NOT NULL,
PRIMARY KEY(id_commentaire, id_article)
)engine=InnoDB;

ALTER TABLE livre
ADD CONSTRAINT fk_editer_editeur
FOREIGN KEY(id_editeur)
REFERENCES editeur(id_editeur);

ALTER TABLE livre
ADD CONSTRAINT fk_attribuer_type_livre
FOREIGN KEY(id_type_livre)
REFERENCES type_livre(id_type_livre);

ALTER TABLE livre
ADD CONSTRAINT fk_illustrer_image
FOREIGN KEY(id_image)
REFERENCES image(id_image);

ALTER TABLE ecrire
ADD CONSTRAINT fk_ecrire_auteur
FOREIGN KEY(id_auteur)
REFERENCES auteur(id_auteur);

ALTER TABLE ecrire
ADD CONSTRAINT fk_ecrire_livre
FOREIGN KEY(id_livre)
REFERENCES livre(id_livre);

ALTER TABLE categoriser
ADD CONSTRAINT fk_categoriser_genre_livre
FOREIGN KEY(id_genre_livre)
REFERENCES genre_livre(id_genre_livre);

ALTER TABLE categoriser
ADD CONSTRAINT fk_categoriser_livre
FOREIGN KEY(id_livre)
REFERENCES livre(id_livre);

ALTER TABLE critique
ADD CONSTRAINT fk_noter_livre
FOREIGN KEY(id_livre)
REFERENCES livre(id_livre);

ALTER TABLE gerer
ADD CONSTRAINT fk_gerer_livre
FOREIGN KEY(id_livre)
REFERENCES livre(id_livre);

ALTER TABLE gerer
ADD CONSTRAINT fk_gerer_administrateur
FOREIGN KEY(id_administrateur)
REFERENCES administrateur(id_administrateur);

ALTER TABLE article
ADD CONSTRAINT fk_agrementer_image
FOREIGN KEY(id_image)
REFERENCES image(id_image);

ALTER TABLE interagir
ADD CONSTRAINT fk_interagir_article
FOREIGN KEY(id_article)
REFERENCES article(id_article);

ALTER TABLE interagir
ADD CONSTRAINT fk_interagir_administrateur
FOREIGN KEY(id_administrateur)
REFERENCES administrateur(id_administrateur);

ALTER TABLE commenter
ADD CONSTRAINT fk_commenter_article
FOREIGN KEY(id_article)
REFERENCES article(id_article);

ALTER TABLE commenter
ADD CONSTRAINT fk_commenter_commentaire
FOREIGN KEY(id_commentaire)
REFERENCES commentaire(id_commentaire);

ALTER TABLE commentaire
ADD CONSTRAINT fk_commenter_administrateur
FOREIGN KEY(id_administrateur)
REFERENCES administrateur(id_administrateur);

insert into auteur (nom_auteur, prenom_auteur) values
('Zola', 'Emile');

insert into editeur (nom_editeur) values
('Flammarion');

insert into type_livre (nom_type_livre) values
('Roman');

insert into image (nom_image, url_image) values
('imageZola', 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSj5fyGeNVBm-q8TRoo1ba8_sJxQbLe9icUo3V3tZFcXImgqPSW12vBmwYySbV2vD78');

insert into livre (titre_livre, date_livre, resume_livre, nb_pages_livre, id_editeur, id_type_livre, id_image) values
('Germinal', '1885-02-01', 'Germinal est un livre qui évoque une histoire.', 660, 1, 1, 1);

update livre
set date_livre = '1885-02-01'
where titre_livre = 'Germinal';

