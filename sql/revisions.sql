


SELECT CLINOM FROM CLIENT ORDER BY CLINOM ASC;
SELECT * FROM ACHAT ORDER BY AQUANT DESC;
SELECT * FROM ACHAT ORDER BY ASEM DESC AND VNO ASC
SELECT CLINOM from client where clinom like '_a%';
SELECT CLINOM FROM client where clinom like '%a%';
SELECT CLINO from achat where vno = 11;
SELECT count(* from achat where clino = 1004
SELECT count(DISTINCT vno) from achat where clino = 1004
select count(DISTINCT clino) from achat;
select count(distinct clino) from achat where asem > 11 and asem < 41
select avg(aquant) from achat where vno = 1
