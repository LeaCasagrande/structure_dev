/* Création de la base de données */
create database sangthetique;
use sangthetique;

/* Création des tables */
create table `personnels`(
id_personnel int not null primary key auto_increment,
nom_personnel varchar(50) not null,
prenom_personnel varchar(50) not null,
mail_personnel varchar(100) not null,
id_equipe int,
id_poste int,
id_image int
)engine=InnoDB;

create table `postes`(
id_poste int not null primary key auto_increment,
nom_poste varchar(50) not null,
grade_poste int not null
)engine=InnoDB;

create table `images`(
id_image int not null primary key auto_increment,
nom_image varchar(50) not null,
url_image varchar(255) not null
)engine=InnoDB;

create table `equipes`(
id_equipe int not null primary key auto_increment,
nom_equipe varchar(50) not null,
id_image int
)engine=InnoDB;

create table `projets`(
id_projet int not null primary key auto_increment,
titre_projet varchar(255) not null,
desc_projet text,
id_equipe int
)engine=InnoDB;

create table `contacts`(
id_contact int not null primary key auto_increment,
nom_contact varchar(50) not null,
prenom_contact varchar(50),
email_contact varchar(100) not null,
sujet_contact int not null,
message_contact text not null,
fichier_contact varchar(255),
date_contact datetime not null
)engine=innoDB;

/* Ajout des contraintes (clés étrangères) */
alter table personnels
add constraint foreign key(id_equipe) references equipes(id_equipe),
add constraint foreign key(id_poste) references postes(id_poste),
add constraint foreign key(id_image) references images(id_image);

alter table equipes
add constraint foreign key(id_image) references images(id_image);

alter table projets
add constraint foreign key(id_equipe) references equipes(id_equipe);


/* Insertion de données */
insert into postes(nom_poste, grade_poste) values
('Responsable d\'équipe', 1),
('Chargé(e) de recherche',5),
('Ingénieur(e) de recherche',10),
('Ingénieur(e) d\'études',15),
('Assistant(e) ingénieur',20),
('Technicien(ne) de recherche',25),
('Doctorant(e)',30),
('Stagiaire',35);

insert into images(nom_image, url_image) values
('personnel1','personnel1.jpg'),
('personnel2','personnel2.jpg'),
('personnel3','personnel3.jpg'),
('personnel4','personnel4.jpg'),
('personnel5','personnel5.jpg'),
('personnel6','personnel6.jpg'),
('personnel7','personnel7.jpg'),
('personnel8','personnel8.jpg'),
('personnel9','personnel9.jpg'),
('personnel10','personnel10.jpg'),
('personnel11','personnel11.jpg'),
('personnel12','personnel12.jpg'),
('personnel13','personnel13.jpg'),
('personnel14','personnel14.jpg'),
('personnel15','personnel15.jpg'),
('personnel16','personnel16.jpg'),
('personnel17','personnel17.jpg'),
('personnel18','personnel18.jpg'),
('personnel19','personnel19.jpg'),
('personnel20','personnel20.jpg'),
('personnel21','personnel21.jpg'),
('personnel22','personnel22.jpg'),
('personnel23','personnel23.jpg'),
('personnel24','personnel24.jpg'),
('personnel25','personnel25.jpg'),
('personnel26','personnel26.jpg'),
('personnel27','personnel27.jpg'),
('team1','team1.jpg'),
('team2','team2.jpg'),
('team3','team3.jpg');

insert into equipes(nom_equipe, id_image) values
('Globules rouges',28),
('Globules blancs',29),
('Plasma et plaquettes',30);

insert into projets(titre_projet, desc_projet, id_equipe) values
("Ingénierie de globules rouges synthétiques à partir de cellules souches hématopoïétiques","La production de globules rouges synthétiques à partir de cellules souches pluripotentes induites (iPS) est une approche prometteuse pour pallier le manque de dons de sang et pour éviter la transmission de maladies infectieuses. Cependant, la production de globules rouges synthétiques à partir d'iPS reste un défi technique en raison de la difficulté à obtenir des cellules de haute qualité et de leur faible capacité de prolifération. Dans ce projet, nous allons développer des méthodes pour produire des iPS à partir de cellules somatiques et les différencier en précurseurs de globules rouges. Nous utiliserons des techniques de culture en trois dimensions pour favoriser la maturation des précurseurs en globules rouges matures fonctionnels. Nous étudierons également les interactions entre les globules rouges synthétiques et l'environnement sanguin après leur transfusion, afin d'optimiser leur fonctionnalité et leur survie. L'ingénierie de globules rouges synthétiques à partir d'iPS est une étape importante pour la production de globules rouges à grande échelle et pour fournir une alternative sûre et efficace aux globules rouges provenant de donneurs.",1),
("Production d'hématies encapsulés pour la transfusion sanguine","La production de globules rouges synthétiques encapsulés est une approche innovante pour la production de globules rouges à grande échelle. La bio-encapsulation est une technique qui permet d'encapsuler des cellules dans une membrane semi-perméable, offrant une protection contre les facteurs environnementaux et une libération contrôlée des produits métaboliques. Dans ce projet, nous allons utiliser des cellules souches hématopoïétiques (CSH) pour produire des globules rouges synthétiques encapsulés. Nous utiliserons des membranes semi-perméables de différentes tailles et propriétés pour optimiser la production de globules rouges matures fonctionnels. Nous étudierons également les interactions entre les globules rouges synthétiques encapsulés et l'environnement sanguin après leur transfusion, afin d'optimiser leur fonctionnalité et leur survie. La production de globules rouges synthétiques encapsulés représente une avancée majeure dans la production de globules rouges à grande échelle et dans la fourniture d'une alternative sûre et efficace aux globules rouges provenant de donneurs.",1),

("Production de globules blancs synthétiques pour la thérapie cellulaire anticancéreuse","La thérapie cellulaire anticancéreuse utilise des cellules immunitaires pour lutter contre les cellules cancéreuses. Cependant, la production de ces cellules à grande échelle pour une utilisation clinique est un défi majeur. La production de globules blancs synthétiques à partir de cellules souches hématopoïétiques (CSH) offre une alternative prometteuse. Dans ce projet, nous allons utiliser des techniques de culture cellulaire et de biologie moléculaire pour différencier les CSH en différents types de globules blancs, y compris les cellules T et les cellules Natural Killer (NK). Nous optimiserons également les protocoles de culture pour produire des globules blancs matures et fonctionnels en grande quantité. Nous étudierons également les interactions entre les globules blancs synthétiques et les cellules cancéreuses in vitro et in vivo, afin d'optimiser leur efficacité thérapeutique. La production de globules blancs synthétiques pour la thérapie cellulaire anticancéreuse représente une avancée majeure dans le traitement du cancer et peut offrir une alternative plus sûre et plus efficace aux thérapies conventionnelles.",2),
("Développement de leucocytes synthétiques à partir de cellules souches pluripotentes induites pour la thérapie de régénération tissulaire","Les globules blancs sont des cellules importantes pour le système immunitaire et jouent un rôle essentiel dans la régénération tissulaire. Cependant, la production de ces cellules à grande échelle pour une utilisation clinique est un défi majeur. La production de globules blancs synthétiques à partir de cellules souches pluripotentes induites (iPS) offre une alternative prometteuse. Dans ce projet, nous allons développer des méthodes pour produire des iPS à partir de cellules somatiques et les différencier en différents types de globules blancs, y compris les macrophages et les cellules dendritiques. Nous utiliserons des techniques de culture cellulaire et de biologie moléculaire pour optimiser les protocoles de culture, afin de produire des globules blancs matures et fonctionnels en grande quantité. Nous étudierons également les interactions entre les globules blancs synthétiques et les cellules du tissu environnant, afin de mieux comprendre leur rôle dans la régénération tissulaire. En particulier, nous nous concentrerons sur la régénération tissulaire dans le contexte des maladies inflammatoires chroniques, telles que la maladie de Crohn et la colite ulcéreuse. Nous étudierons les effets des globules blancs synthétiques sur la régulation de l'inflammation et la cicatrisation des tissus affectés. Nous chercherons également à identifier les marqueurs moléculaires qui peuvent être utilisés pour suivre et quantifier les effets des globules blancs synthétiques dans les tissus.",2),

("Développement de plaquettes synthétiques à partir de cellules souches pluripotentes induites pour la thérapie du cancer","Les patients atteints de cancer présentent souvent une thrombocytopénie (une faible numération des plaquettes sanguines) en raison des effets secondaires des traitements, tels que la chimiothérapie et la radiothérapie. Les transfusions de plaquettes sont couramment utilisées pour traiter cette complication, mais leur approvisionnement peut être limité et leur utilisation présente des risques pour la santé. Dans ce projet, nous allons développer des plaquettes synthétiques à partir de cellules souches pluripotentes induites (iPS) pour la thérapie du cancer. Nous utiliserons des techniques de culture cellulaire et de biologie moléculaire pour optimiser les protocoles de culture, afin de produire des plaquettes matures et fonctionnelles en grande quantité. Nous évaluerons également l'efficacité des plaquettes synthétiques en comparant leur capacité à induire l'hémostase avec les plaquettes conventionnelles provenant de donneurs sains. Nous évaluerons également la sécurité des plaquettes synthétiques en termes d'effets secondaires, tels que des réactions immunitaires, thrombotiques ou autres, ainsi que la transmission de maladies infectieuses.",3),
("Évaluation de l'efficacité de la transfusion de plasma synthétique chez les patients atteints de brûlures étendues","Les brûlures étendues sont une affection traumatique grave qui peut entraîner une perte importante de liquide, de protéines et d'électrolytes. Les transfusions de plasma sont couramment utilisées dans le traitement de ces patients pour compenser les pertes de liquides et d'électrolytes, mais leur approvisionnement peut être limité et leur utilisation présente des risques pour la santé. Dans ce projet, nous allons évaluer l'efficacité et la sécurité de la transfusion de plasma synthétique chez les patients atteints de brûlures étendues. Nous allons développer une méthode de production de plasma synthétique à partir de cellules souches pluripotentes induites (iPS) et l'évaluer chez des modèles animaux pour déterminer la dose optimale. Nous étudierons ensuite l'efficacité du plasma synthétique chez les patients atteints de brûlures étendues en comparant les résultats avec ceux des patients ayant reçu du plasma conventionnel provenant de donneurs sains. Nous évaluerons également la sécurité du plasma synthétique en termes d'effets secondaires, tels que des réactions immunitaires, thrombotiques ou autres, ainsi que la transmission de maladies infectieuses. Nous comparerons les résultats avec ceux des patients ayant reçu du plasma conventionnel provenant de donneurs sains. Le développement de plasma synthétique à partir d'iPS pour la transfusion sanguine peut offrir une alternative plus sûre et plus efficace aux produits sanguins conventionnels, en particulier dans le traitement des urgences médicales.",3);

insert into personnels(prenom_personnel, nom_personnel, mail_personnel, id_equipe, id_poste, id_image) values
('Diane','Suchet','suchet.diane@sangthetique.fr',1,1,26),
('Stéphanie','Blanchard','blanchard.stephanie@sangthetique.fr',1,2,5),
('Jérôme','Dumont','dumont.jerome@sangthetique.fr',1,2,15),
('Margot','Charbonneau','charbonneau.margot@sangthetique.fr',1,4,12),
('Adrien','Etienne','etienne.adrien@sangthetique.fr',1,4,16),
('Marlène','Vidal','vidal.marlene@sangthetique.fr',1,5,10),
('Jean-Luc','Coulomb','coulomb.jeanluc@sangthetique.fr',1,6,23),
('Thomas','Moineau','moineau.thomas@sangthetique.fr',1,7,22),
('Vittoria','Marcelli','marcelli.vittoria@sangthetique.fr',1,7,20),
('Océane','Alarie','alarie.oceane@sangthetique.fr',1,8,4),

('Eric','Beauregard','beauregard.eric@sangthetique.fr',2,1,1),
('Irène','Lortie','lortie.irene@sangthetique.fr',2,2,8),
('Florent','Dujardin','dujardin.florent@sangthetique.fr',2,3,2),
('Chantal','Reverdin','reverdin.chantal@sangthetique.fr',2,4,14),
('Ludovic','Barbier','barbier.ludovic@sangthetique.fr',2,5,9),
('Valentine','Portier','portier.valentine@sangthetique.fr',2,6,7),
('Andrej','Mayrhofer','mayrhofer.andrej@sangthetique.fr',2,7,18),
('Killian','Demaret','demaret.killian@sangthetique.fr',2,8,21),

('Corinne','Micheaux','micheaux.corinne@sangthetique.fr',3,1,25),
('Sébastien','Bello','bello.sebastien@sangthetique.fr',3,2,17),
('Françoise','Allard','allard.francoise@sangthetique.fr',3,2,27),
('Edouard','Brunet','brunet.edouard@sangthetique.fr',3,4,11),
('Fabien','Jacquet','jacquet.fabien@sangthetique.fr',3,4,3),
('Nicolas','Toussaint','toussaint.nicolas@sangthetique.fr',3,5,24),
('Alexandrine','Lavaud','lavaud.alexandrine@sangthetique.fr',3,6,19),
('Pauline','Piaget','piaget.pauline@sangthetique.fr',3,6,6),
('Matthieu','Rodriguez','rodriguez.matthieu@sangthetique.fr',3,7,13);

SELECT personnels.nom_personnel, personnels.prenom_personnel, personnels.mail_personnel,
equipes.nom_equipe, postes.nom_poste, images.url_image
            from personnels
            inner join equipes on personnels.id_equipe = equipes.id_equipe
            inner join postes on personnels.id_poste = postes.id_poste
            inner join images on personnels.id_image = images.id_image
            where nom_equipe = 'Globules rouges'
            order by grade_poste;
            
SELECT personnels.nom_personnel, personnels.prenom_personnel, personnels.mail_personnel, equipes.nom_equipe, postes.nom_poste
			from personnels
			inner join equipes on personnels.id_equipe = equipes.id_equipe
			inner join postes on personnels.id_poste = postes.id_poste
			where nom_personnel LIKE '%e%' or prenom_personnel like '%e%'
			order by nom_personnel;

SELECT images.url_image
			from images
			inner join equipes on images.id_image = equipes.id_image
			where equipes.id_equipe = 1;
            
SELECT projets.titre_projet, projets.desc_projet
			from projets
			inner join equipes on projets.id_equipe = equipes.id_equipe
			where equipes.id_equipe = 1;