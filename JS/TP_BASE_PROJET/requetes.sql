/*CREATE TABLE villes (
  code_postal int not null,
  insee int not null,
  latitude varchar(30) not null,
  longitude varchar(30) not null,
  nom varchar(50) not null,
  PRIMARY KEY(code_postal, insee)
) */

CREATE TABLE ville (
  codePostal int not null PRIMARY KEY ,
  latitude varchar(30) not null,
  longitude varchar(30) not null,
  nom varchar(50) not null
);

CREATE TABLE magasin (
    idMag int not null primary key,
    nomMag varchar(30) not null,
    latMag decimal(10,7) not null,
    longMag decimal(10,7) not null,
    Idtype int not null,
    Idcat int not null,
    codePostal int not null,
    CONSTRAINT  fk_cp FOREIGN KEY (codePostal) REFERENCES ville(codePostal)
);

INSERT INTO ville
values('13800', '43.5167', '4.9833', 'istres');

INSERT INTO ville
values('05000', '44.5667', '6.0833', 'gap');

INSERT INTO ville
values('74000', '45.9', '6.1167', 'annecy');


45.934749
6.145504