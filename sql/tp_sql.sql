CREATE TABLE PILOTE
(
	num_pilote INT NOT NULL PRIMARY KEY,
	nom_pilote VARCHAR(30) NOT NULL,
	adresse VARCHAR(30) NOT NULL
);

CREATE TABLE AVION
(
	num_avion INT NOT NULL PRIMARY KEY,
	nom_avion VARCHAR(30) NOT NULL,
	capacite INT NOT NULL,
	localisation VARCHAR(30) NOT NULL
);

CREATE TABLE VOL
(
	num_vol VARCHAR(7) NOT NULL PRIMARY KEY,
	ville_depart VARCHAR(30) NOT NULL,
	ville_arrivee VARCHAR(30) NOT NULL,
	heure_depart TIME NOT NULL,
	heure_arrivee TIME NOT NULL,
	num_avion INT NOT NULL,
	num_pilote INT NOT NULL,
	CONSTRAINT fk_num_pilote FOREIGN KEY (num_pilote) REFERENCES PILOTE(num_pilote),
	CONSTRAINT fk_num_avion FOREIGN KEY (num_avion) REFERENCES AVION(num_avion)
);

INSERT INTO PILOTE VALUES(100, 'Jean', 'Paris');
INSERT INTO PILOTE VALUES(101, 'Pierre', 'Paris');
INSERT INTO PILOTE VALUES(102, 'Paul', 'Paris');
INSERT INTO PILOTE VALUES(103, 'Jean', 'Bordeaux');
INSERT INTO PILOTE VALUES(104, 'Luc', 'Nantes');
INSERT INTO PILOTE VALUES(105, 'Manuel', 'Toulouse');
INSERT INTO PILOTE VALUES(106, 'Bruno', 'Toulouse');
INSERT INTO PILOTE VALUES(107, 'Pierre', 'Bordeaux');

INSERT INTO AVION VALUES(5000, 'Airbus', 300, 'Toulouse');
INSERT INTO AVION VALUES(5001, 'Airbus', 280, 'Paris');
INSERT INTO AVION VALUES(5002, 'Caravelle', 240, 'Paris');
INSERT INTO AVION VALUES(5003, 'Boeing', 200, 'Paris');
INSERT INTO AVION VALUES(5004, 'Airbus', 270, 'Paris');
INSERT INTO AVION VALUES(5005, 'Airbus', 250, 'Bordeaux');
INSERT INTO AVION VALUES(5006, 'Airbus', 270, 'Nantes');

INSERT INTO VOl VALUES('IT500', 'Bordeaux', 'Paris', '7:30', '8:30', 5005, 107);
INSERT INTO VOl VALUES('IT501', 'Paris', 'Bordeaux', '8:03', '9:00', 5002, 100);
INSERT INTO VOl VALUES('IT502', 'Paris', 'Toulouse', '9:26', '10:30', 5001, 101);
INSERT INTO VOl VALUES('IT503', 'Paris', 'Bordeaux', '10:00', '11:00', 5005, 107);
INSERT INTO VOl VALUES('IT504', 'Bordeaux', 'Nantes', '12:10', '13:30', 5002, 103);
INSERT INTO VOl VALUES('IT505', 'Toulouse', 'Paris', '12:30', '13:50', 5001, 101);
INSERT INTO VOl VALUES('IT506', 'Bordeaux', 'Paris', '13:00', '14:00', 5005, 100);
INSERT INTO VOl VALUES('IT507', 'Nantes', 'Paris', '15:30', '16:50', 5002, 104);
INSERT INTO VOl VALUES('IT508', 'Nantes', 'Bordeaux', '17:00', '18:00', 5006, 103);
INSERT INTO VOl VALUES('IT509', 'Paris', 'Bordeaux', '19:00', '20:00', 5005, 104);
INSERT INTO VOl VALUES('IT510', 'Bordeaux', 'Nantes', '22:00', '23:00', 5006, 104);

--REQUETES--
a)SELECT num_vol, heure_depart from vol WHERE ville_depart = 'Paris' order by heure_depart desc;
b)SELECT count(*) FROM vol WHERE num_pilote = 104;
c)SELECT count(*) from pilote;
d)
e)select avg(capacite) from avion where nom_avion = 'Airbus'
f)select num_avion, nom_avion from avion where localisation = 'Paris' order by nom_avion
g)select p.num_pilote, p.nom_pilote, a.num_avion, a.nom_avion
	from pilote p
	inner join vol v on p.num_pilote = v.num_pilote
	inner join avion a on v.num_avion = a.num_avion
	ORDER BY p.num_pilote DESC
h)select p.nom_pilote
	from pilote as p
	inner join vol as v on p.num_pilote = v.num_pilote
	where v.ville_depart = 'Paris'
i)select DISTINCT p.nom_pilote
	from pilote as p
	inner join vol as v on p.num_pilote = v.num_pilote
	where v.num_avion = 5004 or v.num_avion = 5005
j)select DISTINCT p.nom_pilote
	from pilote p
	inner join vol v on p.num_pilote = v.num_pilote
	inner join avion a on v.num_avion = a.num_avion
	where a.nom_avion = 'Airbus'
k)SELECT num_vol, ville_depart, ville_arrivee
	from VOL
	where num_avion =
	( select num_avion from vol where num_vol = 'IT509')
l)SELECT distinct p.nom_pilote
	FROM pilote as p inner join vol as v
	on P.num_pilote = v.num_pilote
	where p.adresse != v.ville_arrivee
m)SELECT DISTINCT p.num_pilote
	From pilote as p
	inner join vol as v on p.num_pilote = v.num_pilote
	 where v.num_avion in
	 (select v.num_avion from vol as v where v.num_pilote = 104)
n)SELECT DISTINCT p.nom_pilote
	From pilote as p
	inner join vol as v on p.num_pilote = v.num_pilote
	 where v.num_avion in
	 (select v.num_avion from vol as v where v.num_pilote = 104)
o)SELECT v.num_vol, v.ville_depart, v.ville_arrivee, a.nom_avion, a.capacite
	FROM vol as v inner join avion as a ON v.num_avion = a.num_avion
	WHERE v.ville_depart in ( select adresse from pilote where num_pilote= 105 )
p)select p.num_pilote, p.nom_pilote, p.adresse, count(v.num_pilote)
	from pilote as p inner join vol as v on p.num_pilote = v.num_pilote
	group by num_pilote
q)select a.num_avion, a.nom_avion from avion as a
	inner join vol as v on a.num_avion = v.num_avion
	group by a.num_avion having count(v.num_avion) > 2
r)select nom_avion, avg(capacite) from AVION GROUP BY nom_avion
s)
t)select DISTINCT ville_depart from VOl WHERE ville_depart in (select ville_arrivee from VOL )
u)select nom_pilote
from pilote inner join VOL on pilote.num_pilote = VOL.num_pilote
where ville_depart not in (select ville_depart from VOL) AND ville_arrivee not in (select ville_arrivee from VOL)
v)select DISTINCT v.num_avion , a.nom_avion from VOL as v inner join AVION as a on v.num_avion = a.num_avion where v.num_pilote != 100
w)select DISTINCT num_avion
from VOl
where num_avion not in (
	select num_avion
	from VOl
	WHERE ville_depart ='Paris')
x)select DISTINCT a.num_avion , a.nom_avion
from vol as v inner join avion as a on v.num_avion = a.num_avion
where v.num_avion not in (
	select num_avion
	from vol
	WHERE ville_depart ="Paris")
y)select DISTINCT nom_pilote from PILOTE where adresse in (select localisation from avion)
z)select num_pilote from PILOTE where num_pilote not in( select num_pilote from VOl )