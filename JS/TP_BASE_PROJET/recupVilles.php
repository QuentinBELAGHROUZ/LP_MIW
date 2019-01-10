<?php
try {
    $bdd = new PDO(
        'mysql:host=localhost;dbname=ptut;charset=utf8',
        'root',
        'root',
        array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING)

    );
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

if(!empty($_GET['codePostal'])){
    $req = $bdd->prepare('SELECT * from magasin where codePostal = ?');
    $req->execute(array($_GET['codePostal']));
    $magasins = $req -> fetchAll(PDO::FETCH_ASSOC);
    echo(json_encode($magasins));
}
else if(!empty($_GET['ville'])){
    $ville = $_GET['ville'];
    $req = $bdd->prepare('SELECT * from villes where nom like :ville');
    $req->execute(array('ville' => '%' . $ville . '%'));
    $infos_ville = $req -> fetchAll(PDO::FETCH_ASSOC);
    echo(json_encode($infos_ville));
}
