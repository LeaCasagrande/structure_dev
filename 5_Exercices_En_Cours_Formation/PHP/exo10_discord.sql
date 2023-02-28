create database testDB;
use testDB;

CREATE TABLE employes (
    id_employe int not null primary key auto_increment,
    nom_employe VARCHAR(255),
    poste_employe VARCHAR(255),
    salaire_employe FLOAT
)engine=innoDB;

INSERT INTO employes (nom_employe, poste_employe, salaire_employe)
VALUES ('John Doe', 'Manager', 50000),
       ('Jane Smith', 'Developer', 80000),
       ('Bob Johnson', 'Designer', 60000),
       ('Emily Davis', 'HR Representative', 55000),
       ('Adam Wilson', 'Marketing Coordinator', 65000),
       ('Sophia Taylor', 'Sales Associate', 75000),
       ('Joshua Martinez', 'Product Manager', 85000);
       
delete from employes WHERE (EXISTS (SELECT * from employes WHERE id_employe=15) AND id_employe=15);

SELECT * from employes WHERE poste_employe LIKE '%Dev%';