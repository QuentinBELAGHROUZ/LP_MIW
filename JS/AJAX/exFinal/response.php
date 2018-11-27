<?php
header("Content-type: text/xml");

try{
    $bdd = new PDO(
        'mysql:host=localhost;dbname=exo_ajax;charset=utf8',
        'root',
        'root',
        array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_WARNING)

    );
}catch(Exception $e){
    die('Erreur : '.$e->getMessage());
}

$result = $bdd -> query('SELECT * FROM categories');

$liste = "<?xml version=\"1.0\"?>\n";
$liste .= "<exemple>";

while($row = $result->fetch()){
    $liste .= "<choix><nom>".$row['libCat']."</nom></choix>";
}

$liste .= "</exemple>";

echo $liste;


