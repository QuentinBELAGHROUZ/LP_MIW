--   a) Pour chaque participant afficher: Son nom, son prénom et le nombre de voyages réalisés
--   b) Afficher le nom et prénom des participants s'étant inscrits à plus de deux voyages
--   c) Afficher le nom et prénom des participants  inscrits au  voyage N°2
--   d) Afficher le nom et prénom des participants  non inscrits au  voyage N°2
--   e) Afficher l'intitulé des voyages qui se dérouleront en avion.
--   f) Pour chaque voyage afficher l'intitulé et le chiffre d'affaire réalisé.

-- a)
SELECT ParticipantNom, ParticipantPrenom,  count(idParticipant) as nb_voyages
FROM participant as p inner join inscription as i 
on p.idParticipant = i.Participant_idParticipant
group by ParticipantNom;

-- b)
SELECT ParticipantNom, ParticipantPrenom
FROM participant as p inner join inscription as i 
on p.idParticipant = i.Participant_idParticipant
group by ParticipantNom
having  count(i.Participant_idParticipant) > 2;

-- c)
SELECT ParticipantNom, ParticipantPrenom, Voyage_idVoyage
FROM participant as p inner join inscription as i
on p.idParticipant = i.Participant_idParticipant
where Voyage_idVoyage = 2;

-- d)
SELECT distinct ParticipantPrenom, ParticipantNom
FROM participant as p inner join inscription as i
on p.idParticipant = i.Participant_idParticipant
where i.Participant_idParticipant not in (select Participant_idParticipant  from inscription where Voyage_idVoyage = 2);

-- e)
SELECT * FROM transport;
SELECT * FROM voyage;
SELECT * FROM inscription;

SELECT VoyageIntitule 
FROM voyage as v INNER JOIN transport as t 
ON v.Transport_idTransport = t.idTransport
where TransportLib = 'Avion';

-- f)
SELECT VoyageIntitule, sum(nombre_peronne * VoyagePrix)
FROM voyage as v inner join inscription as i 
ON v.idVoyage = i.Voyage_idVoyage
group by idVoyage


 