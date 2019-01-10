<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>TP BASE PROJET</title>
    <script src="script.js"></script>
    <script src="bibliAjax.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css"
          integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
          crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"
            integrity="sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA=="
            crossorigin=""></script>
</head>
<style>#map {
        margin-top: 50px;
        height: 400px;
    }</style>
<script type="text/javascript">
    // On initialise la latitude et la longitude de Paris (centre de la carte)
    var macarte = null;
    var lat = 44.5667;
    var lon = 6.0833;

    window.onload = function () {
        // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
        initMap();
    };
</script>
<body>
<input id="ville" list="villes">

<script>
    ville.onkeyup = () => {
        if(ville.value.length >= 2) {
            $get('recupVilles.php', {"ville":this.value}, afficheVilles, erreur);
        }
    }
</script>
<datalist id="villes"></datalist>

<div id="map"></div>


</body>
</html>