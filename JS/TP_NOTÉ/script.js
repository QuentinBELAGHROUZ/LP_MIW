//--------TABLEAUX------------------------------------------

var d = new Array('PC', 'imprimante', 'moniteur', 'cable', 'souris', 'clavier');
var p = new Array(1000, 80, 150, 20, 30, 50);


//--------FORMULAIRE----------------------------------------

function afficheForm() {
    let ch1 = '<form style="width: 500px;" name="commande">' +
        '<fieldset class="ident">' +
        '<legend>Identification</legend>' +
        '<div class="group">' +
        '            <label for="nom">Nom :</label>' +
        '            <input type="text" name="ident" id="nom">' +
        '            <label for="prenom">Prénom :</label>' +
        '            <input type="text" name="ident" id="prenom">' +
        '</div>' +
        '        <label for="adresse">Adresse :</label>' +
        '        <input type="text" name="ident" id="adresse">' +
        '        <br>' +
        '            <label for="code_postal">Code postal :</label>' +
        '            <input type="text" name="ident" id="code_postal">' +
        '            <label for="ville">Ville :</label>' +
        '            <input type="text" name="ident" id="ville">' +
        '        </div>' +
        '        <br>' +
        '            <label for="telephone">Telephone :</label>' +
        '            <input type="text" name="ident" id="telephone">' +
        '            <label for="email">E-mail :</label>' +
        '            <input type="text" name="ident" id="email">' +
        '        </div>' +
        '        <br>' +
        '</fieldset>' +
        '<fieldset class="produits">' +
        '        <legend>Selection des produits</legend>';

    let ch2 = '';
    for (let i = 1; i <= 3; i++) {
        ch2 = '<select id="produit' + i + '" name="produit" onfocus="afficheProduit(' + i + ')" onchange="afficheLigne(' + i + ')">' +
            '<option selected="selected">TEST</option>' +
            '     </select>' +
            '                  <input type="text" class="form-control" id="prix' + i + '"  placeholder="prix" readonly>' +
            '       <input type="text" class="form-control" id="quantite' + i + '" placeholder="quantité" readonly>' +
            '            <span class="fas fa-plus" onclick="plus(' + i + ')"></span>' +
            '                  <span class="fas fa-minus" onclick="moins(' + i + ')"></span>' +
            '               <span class="fas fa-times" onclick="sup(' + i + ')"></span>' +
            '</div>';
        ch1 = ch1.concat(ch2);
    }

    let ch3 = '</fieldset>' +
        '<fieldset class="montant">' +
        '        <label for="sel1">Montant HT : </label>' +
        '        <input type="text" class="form-control" id="mt_ht" readonly>' +
        '        <br>' +
        '        <label for="sel1">Montant TVA (19,6%) : </label>' +
        '        <input type="text" class="form-control" id="mt_tva" readonly>' +
        '        <br>\n' +
        '        <label for="sel1">Montant TTC : </label>' +
        '        <input type="text" class="form-control" id="mt_ttc" readonly>' +
        '</fieldset>' +
        '        <input type="button" class="btn btn-primary" value="Envoyer" onclick="validation()">' +
        '        <input type="reset" class="btn btn-primary" value="Reset">' +
        '    </form>';

    ch1 = ch1.concat(ch3);
    document.getElementsByTagName("body")[0].innerHTML = ch1;
}


//--------CHAMPS--------------------------------------------

function validation() {
    var erreur = [];

    //-------------
    nom = document.getElementById('nom').value;
    prenom = document.getElementById('prenom').value;
    adresse = document.getElementById('adresse').value;
    code_postal = document.getElementById('code_postal').value;
    telephone = document.getElementById('telephone').value;
    email = document.getElementById('email').value;

    let ident = document.getElementsByName('ident');

    for (let i = 0; i < ident.length; i++) {
        if (ident[i].value == '') {
            erreur.push('Le champ ' + ident[i].id + ' est vide !');
        }
    }

    //On teste si les informations saisies sont valides
    if (code_postal != '' && !verifCodePostal(code_postal))
        erreur.push('Code postal invalide');

    if (telephone != '' && !verifTelephone(telephone))
        erreur.push('Numéro de téléphone invalide');

    if (email != '' && !verifEmail(email))
        erreur.push('Adresse email invalide');

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
    var reg_email = /^([[a-zA-Z0-9-_.]{2,20})([@]{1})([a-zA-Z0-9-_.]{2,15})([.]{1})([a-zA-z0-9]{2,4})$/;
    return reg_email.test(email);
}


//---------PRODUITS-----------------------------------------

function afficheProduit(n) {
    let option = '';

    for (var i in d)
        option += "<option value='" + d[i] + "'>" + d[i] + "</option>";

    document.getElementById('produit' + n).innerHTML = option;
    afficheLigne(n);
}

function afficheLigne(n) {
    let produitSelectionne = document.getElementById('produit' + n).value;
    let index = d.indexOf(produitSelectionne);
    let prix = p[index];
    document.getElementById('prix' + n).value = prix;
    document.getElementById('quantite' + n).value = 1;
    affMontant();
}


function plus(n) {
    if (document.getElementById('quantite' + n).value == '')
        alert('Saisissez d\'abord un produit !');
    else{
        quantite = parseInt(document.getElementById('quantite' + n).value);
        quantite += 1;
        document.getElementById('quantite' + n).value = quantite;
        affMontant();
    }
}

function moins(n) {
    if (document.getElementById('quantite' + n).value == '')
        alert('Saisissez d\'abord un produit !');
    else if(document.getElementById('quantite' + n).value == 0)
        alert('Une quantité ne peut pas être négative ;)');
    else{
        document.getElementById('quantite' + n).value -= 1;
        affMontant();
    }

}

function sup(n) {
    if (document.getElementById('quantite' + n).value != ''){
        document.getElementById('produit' + n).value = '';
        document.getElementById('prix' + n).value = '';
        document.getElementById('quantite' + n).value = '';
        affMontant();
    }
}

//--------FORMULAIRE----------------------------------------

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


