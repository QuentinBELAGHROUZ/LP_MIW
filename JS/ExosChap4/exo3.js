let valeur_carte = ['valet'];
let couleur_carte = ['carreau', 'pique', 'trefle'];

function affiche_form() {
    let ch = '<select id="valeur">' +
        '<option value="choisir" selected="selected">choisir</option>';

    for (let i in valeur_carte)
        ch += '<option value=' + valeur_carte[i] + '>' + valeur_carte[i] + '</option>';

    ch += '</select>';

    ch += '<select id="couleur">' +
        '<option selected="selected">choisir</option>';

    for (let i in couleur_carte)
        ch += '<option value=' + couleur_carte[i] + '>' + couleur_carte[i] + '</option>';
    ch += '</select>' + '<button onclick="change_carte()">Cliquer</button><br>' +
        '<img style="width: 30%" src="./cartes/valet_carreau.png">';


    document.getElementsByTagName("body")[0].innerHTML = ch;
}

function Carte(_numero, _couleur, _image) {
    this.numero = _numero;
    this.couleur = _couleur;
    this.image = _image;

    this.afficheCarte = function(){
       let img_courante = document.getElementsByTagName("img")[0];
       img_courante.setAttribute("src", this.image);
    };
}

function change_carte(){
    let valeur_carte = document.getElementById('valeur').value;
    let couleur_carte = document.getElementById('couleur').value;
    let image_carte = './cartes/'+valeur_carte+'_'+couleur_carte+'.png'

    var test_carte = new Carte(valeur_carte, couleur_carte, image_carte);
    test_carte.afficheCarte()
}
