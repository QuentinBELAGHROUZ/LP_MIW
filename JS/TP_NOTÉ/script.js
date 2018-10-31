//--------TABLEAUX------------------------------------------

var d = new Array('PC', 'imprimante', 'moniteur', 'cable', 'souris', 'clavier');
var p = new Array(1000, 80, 150, 20, 30, 50);


//--------FORMULAIRE----------------------------------------
/*  TODO habillage du formulaire en CSS */

function afficheForm() {
    let ch1 = '<form style="width: 500px;" name="commande">\n' +
        '<fieldset class="ident">' +
        '<legend>Identification</legend>'+
        '        <div class="form-inline">\n' +
        '            <label for="nom">Nom :</label>\n' +
        '            <input type="text" class="form-control" id="nom">\n' +
        '            <label for="prenom">Prénom :</label>\n' +
        '            <input type="text" class="form-control" id="prenom">\n' +
        '        </div>\n' +
        '\n' +
        '        <label for="adresse">Adresse :</label>\n' +
        '        <input type="text" class="form-control" id="adresse">\n' +
        '        <br>\n' +
        '\n' +
        '        <div class="form-inline">\n' +
        '            <label for="code_postal">Code postal :</label>\n' +
        '            <input type="text" class="form-control" id="code_postal">\n' +
        '            <label for="ville">Ville :</label>\n' +
        '            <input type="text" class="form-control" id="ville">\n' +
        '        </div>\n' +
        '        <br>\n' +
        '\n' +
        '        <div class="form-inline">\n' +
        '            <label for="telephone">Telephone :</label>\n' +
        '            <input type="text" class="form-control" id="telephone">\n' +
        '            <label for="email">E-mail :</label>\n' +
        '            <input type="text" class="form-control" id="email">\n' +
        '\n' +
        '        </div>\n' +
        '\n' +
        '        <br>\n' +
        '\n' +
        '</fieldset>'+
        '<fieldset class="produits">'+
        '        <legend>Selection des produits</legend>';

    let ch2 = '';
    for (let i = 1; i <= 3; i++) {
        ch2 = ' <div class="form-inline">' +
            '              <select class="form-control" id="produit'+i+'" name="produit" onfocus="afficheProduit(' + i + ')" onchange="afficheLigne(' + i + ')">' +
            '  <option>Choisir</option>' +
            '     </select>' +
            '                  <input type="text" class="form-control" id="prix' + i + '"  placeholder="prix" readonly>' +
            '       <input type="text" class="form-control" id="quantite' + i + '" placeholder="quantité" readonly>' +
            '            <span class="fas fa-plus" onclick="plus(' + i + ')"></span>' +
            '                  <span class="fas fa-minus" onclick="moins('+i+')"></span>' +
            '               <span class="fas fa-times" onclick="sup('+i+')"></span>' +
            '</div>';
        ch1 = ch1.concat(ch2);
    }

     let ch3 =    '</fieldset> \n' +
         '<fieldset class="montant">'+
         '        <label for="sel1">Montant HT : </label>\n' +
         '        <input type="text" class="form-control" id="mt_ht" readonly>\n' +
         '        <br>\n' +
         '        <label for="sel1">Montant TVA (19,6%) : </label>\n' +
         '        <input type="text" class="form-control" id="mt_tva" readonly>\n' +
         '        <br>\n' +
         '        <label for="sel1">Montant TTC : </label>\n' +
         '        <input type="text" class="form-control" id="mt_ttc" readonly>\n' +
         '</fieldset>' +
         '        <input type="submit" class="btn btn-primary" value="Envoyer" onclick="validation()">\n' +
         '        <input type="reset" class="btn btn-primary" value="Reset">\n' +
         '    </form>';

    ch1 = ch1.concat(ch3);
    console.log(ch1);

    document.getElementsByTagName("body")[0].innerHTML = ch1;
}


//--------CHAMPS--------------------------------------------
function validation() {
    var erreur = [];


    console.log(document.forms['commande'])
    //-------------
    nom = document.getElementById('nom').value;
    prenom = document.getElementById('prenom').value;
    adresse = document.getElementById('adresse').value;
    code_postal = document.getElementById('code_postal').value;
    telephone = document.getElementById('telephone').value;
    email = document.getElementById('email').value;

    //On teste si les champs sont remplis
    if (nom == '')
        erreur.push('Le champ nom est vide');
    if (prenom == '')
        erreur.push('Le champ prenom est vide');
    if (adresse == '')
        erreur.push('Le champ adresse est vide');
    if (code_postal == '')
        erreur.push('Le champ code_postal est vide');
    if (telephone == '')
        erreur.push('Le champ telephone est vide');
    if (email == '')
        erreur.push('Le champ email est vide');

    //On teste si les informations saisies sont valides
    if (!verifCodePostal(code_postal))
        erreur.push('Code postal invalide');

    if (!verifTelephone(telephone))
        erreur.push('Numéro de téléphone invalide');

    if (!verifEmail(email))
        erreur.push('Adresse email invalide');

    console.log(erreur);

    if (erreur.length != 0) {
        alert(erreur.join('\n'));
    } else {
        alert('Formulaire correct !');
    }

}

function verifCodePostal(code_postal) {
    var reg_cp = /^[0-9]{5,5}$/;
    return reg_cp.test(code_postal);
}

function verifTelephone(telephone) {
    var reg_tel = /(\d{2}([ .-]))(\d{2}\2){3}\d{2}$/;
    return reg_tel.test(telephone);
}

function verifEmail(email) {
    var reg_email = /^[a-zA-Z0-9.-_]{2,15}[@][a-zA-Z0-9-_]{2,15}[.][a-zA-z0-9]{2,4}$/;
    return reg_email.test(email);
}


//---------PRODUITS-----------------------------------------
function afficheProduit(n) {
    let d_option = "<option value='0'>choisir</option>";
    let option = '';
    for (var i in d) {
        option += "<option value='" + d[i] + "'>" + d[i] + "</option>";
        console.log(option);
    }
    document.getElementById('produit' + n).innerHTML = option;
    afficheLigne(n);
}

function afficheLigne(n) {
    let produitSelectionne = document.getElementById('produit' + n).value;
    console.log(produitSelectionne);
    let index = d.indexOf(produitSelectionne);
    let prix = p[index];
    document.getElementById('prix' + n).value = prix;
    document.getElementById('quantite' + n).value = 1;
    affMontant();
}


function plus(n) {
    quantite = parseInt(document.getElementById('quantite' + n).value);
    quantite += 1;
    document.getElementById('quantite' + n).value = quantite;
    affMontant();
}

function moins(n) {
    if (document.getElementById('quantite' + n).value == 0)
        alert('Une quanité ne peut pas être négative ;)');
    else
        document.getElementById('quantite' + n).value -= 1;

    affMontant();
}

function sup(n) {
    document.getElementById('produit' + n).value = '';
    document.getElementById('prix' + n).value = '';
    document.getElementById('quantite' + n).value = '';
    affMontant();
}

function affMontant() {
    let montant_ht = 0;
    let montant_tva = 0;
    let montant_ttc = 0;
    for (var i = 1; i <= 3; i++) {
        montant_ht += (document.getElementById('prix' + i).value * document.getElementById('quantite' + i).value);
    }
    montant_ht = montant_ht.toFixed(2);
    montant_tva = montant_ht * 0.196;
    montant_tva = montant_tva.toFixed(2);
    montant_ttc = parseFloat(montant_ht) + parseFloat(montant_tva);

    document.getElementById('mt_ht').value = montant_ht;
    document.getElementById('mt_tva').value = montant_tva;
    document.getElementById('mt_ttc').value = montant_ttc;
}


