let r = ['01', '02', '03', '04', '05'];
let d = ['ecran', 'clavier', 'souris', 'imprimante', 'enceinte'];
let p = [150, 20, 10, 100, 50];


let tab_ex8 = ['r01*ecran*150', 'r02*clavier*20', 'r03*souris*10'];

function printLength(text) {
    var size = document.getElementById('textarea').value.length;
    document.getElementById('text').value = size
}

function deleteContent() {
    document.getElementById('textarea').value = '';
    document.getElementById('text').value = '';
}

function exo4(n) {
    document.open();
    document.write('<h1>' + n + '</h1>');
    document.close();
}

function exo5() {
    let str = document.getElementById('champ1').value;
    document.getElementById('champ2').value = str.split("").reverse().join("");
}

function exo6() {
    let str1 = document.getElementById('champ').value;
    let str2 = str1.split("").reverse().join("");
    console.log(str1);
    console.log(str2);
    document.open();
    if (str1 == str2)
        document.write('<h3>La chaine de caractère est un palindrome</h3>');
    else
        document.write('<h3>La chaine de caractère n\'est pas un palindrome</h3>');
    document.close();
}

function exo7() {
    let ref_prod =document.getElementById("produit").value;
    let index = r.indexOf(ref_prod);
    let des_prod = d[index];
    let prix_prod = p[index];
    document.open();
    document.write('Designation : ' + des_prod  + ' Prix : ' + prix_prod);
    document.close();
}

function split_array_ex8(tab){
    let tab2 = [];
    for(let i in tab)
        tab2[i] = tab[i].split('*');
    return tab2;
}

function montant() {
    let montant = document.getElementById('prix').value * document.getElementById('quantite').value;
    document.getElementById('montant').value = montant;
}

function exo8(){
    let tmp = document.getElementById('produit').value;
    tmp = tmp.split(',');
    document.getElementById('ref').value = tmp[0];
    document.getElementById('prix').value = tmp[2];
}

function exo10(){
    let nb_aleatoire = 42;
    let nb_essais_restants = 3;
    let saisie;
    let gagne = false;

    do{
       saisie =  prompt('Essayez de deviner le nombre mystere ( ' + nb_essais_restants + ' essais) ');
        if(saisie > nb_aleatoire)
            alert('Trop grand');
        else if(saisie < nb_aleatoire)
            alert('Trop petit');

        nb_essais_restants -= 1;

        if(nb_essais_restants == 0)
            break;
    }while(saisie != nb_aleatoire );

    if(nb_essais_restants == 0)
        alert('Perdu !')
    else
        alert('Gagné !');

}

function exo11(){
    let txm = prompt('Taux Mensuel');
    let mt = prompt('Montant du credit');
    let duree = prompt('Duree');

    let ch =  '<table>'+
        '<tr>'+
        '<th>Periode</th>'+
        '<th>Capital Restant</th>'+
        '<th>Interet</th>'+
        '<th>Amortissement</th>'+
        '<th>Mensualite</th>'+
        '</tr>';

       ch += '</table>';

    document.open();
    document.write(ch);
    document.close();
}

function setMap() {
    macarte = new L.map('map').setView([48.856614, 2.352221], 14);
    marker = L.marker([48.856614, 2.352221]).addTo(macarte);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);
}

function setPos(){
    console.log(document.getElementById('selectVille').value);
    marker.remove();
    let tabPosition = document.getElementById('selectVille').value.split(':');
    marker = L.marker([tabPosition[0], tabPosition[1]]).addTo(macarte);
    macarte.setView([tabPosition[0], tabPosition[1]], 14);
}

