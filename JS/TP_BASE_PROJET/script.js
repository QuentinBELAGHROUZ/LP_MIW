function initMap() {
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 12);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);
}

function afficheVilles() {
    let my_data = JSON.parse(xhttp.responseText);
    console.log(my_data);
    let input = document.getElementById('ville');

    let datalist = document.getElementsByTagName('datalist')[0];

    datalist.innerHTML = "";
    for (let i in my_data) {
        //generation des options
        let option = document.createElement('option');

        option.textContent = my_data[i]['nom'];

        datalist.appendChild(option);

    }

    //a chaque modification du champ input
    input.oninput = (e) => {
        //on lance une methode $get pour recuperer les infos selon la ville sélectionnée
        $get('recupVilles.php', {ville:input.value}, afficheCarte, erreur);

    }
}

function afficheMagasins(){
    let json = JSON.parse(xhttp.responseText);
    console.log('on est dans magasin');
    console.log(json);

    //pour chaque magasinon créé un marker
    for(let i in json){
        console.log(json[i]['nomMag']);
        var marker = L.marker([json[i]['latMag'], json[i]['longMag']]).addTo(macarte);
        marker.bindPopup("<b>"+json[i]['nomMag']+"</b>").openPopup();
    }
}

function afficheCarte() {
    let json = JSON.parse(xhttp.responseText);
    let new_lat = json[0]['latitude'];
    let new_lon = json[0]['longitude'];
    let codePostal = json[0]['codePostal'];
    //console.log(codePostal);
    $get('recupVilles.php', {codePostal:codePostal}, afficheMagasins, erreur);

    macarte.setView(new L.LatLng(new_lat, new_lon), 11);
}




function erreur() {
    console.log('ERREUR');
}

