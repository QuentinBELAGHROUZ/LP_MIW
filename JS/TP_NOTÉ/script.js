//--------Déclaration des tableaux

var d = new Array('PC', 'imprimante', 'moniteur', 'cable', 'souris', 'clavier');
var p = new Array(1000, 80, 150, 20, 30, 50);

document.forms["test"].addEventListener("submit", function(e) {
    var inputs = this;
    var erreur = [];

    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            erreur.push( "Veuillez renseigner tous les champs");
            break;
        }
    }

    //-------------
     nom = document.getElementById('nom').value;
     prenom = document.getElementById('prenom').value;
     adresse = document.getElementById('adresse').value;
     code_postal = document.getElementById('code_postal').value;
     telephone = document.getElementById('telephone').value;
     email = document.getElementById('email').value;

     console.log(code_postal);

     if(!verifCodePostal(code_postal))
        erreur.push('Code postal invalide');

     if(!verifTelephone(telephone))
         erreur.push('Numéro de téléphone invalide');

     if(!verifEmail(email))
         erreur.push('Adresse email invalide');

     console.log(erreur);

    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert('Formulaire correct !');
    }
});


//---------Fonctions de contrôle de champs--------------------

function verifCodePostal(code_postal){
    var reg_cp = /^[0-9]{5,5}$/;
    return reg_cp.test(code_postal);
}

function verifTelephone(telephone){
    var reg_tel = /^0\d(\s|-)?(\d{2}(\s|-)?){4}$/;
    return reg_tel.test(telephone);
}

function verifEmail(email){
    var reg_email = /^[a-zA-Z0-9.-_]{2,15}[@][a-zA-Z0-9-_]{2,15}[.][a-zA-z0-9]{2,4}$/;
    return reg_email.test(email);
}

//---------Fonctions sur les produits------------------------
function afficheProduit(n){
    var newOptions = d;
    var newValues = d;
    option = document.getElementById("produit" + n);
    option.options.length = 0;
    for(i = 0; i < d.length; i++){
        option.options[option.length] = new Option(d[i], d[i]);
    }
    afficheLigne(n);
}

function plus(n){
    quantite = parseInt(document.getElementById('quantite'+n).value);
    quantite += 1;
    document.getElementById('quantite'+n).value = quantite;
    affMontant();
}
function moins(n){
    document.getElementById('quantite'+n).value -= 1;
    affMontant();
}

function sup(n){
    document.getElementById('quantite'+n).value = '';
}

function affMontant(){
    let montant_ht = 0;
    let montant_tva = 0;
    let montant_ttc = 0;
    for(var i = 1; i <= 3; i++){
        montant_ht += (document.getElementById('prix'+i).value * document.getElementById('quantite'+i).value);
    }
    montant_ht = montant_ht.toFixed(2);
    montant_tva = montant_ht * 0.196;
    montant_tva = montant_tva.toFixed(2);
    montant_ttc = parseFloat(montant_ht) + parseFloat(montant_tva);

    document.getElementById('mt_ht').value = montant_ht;
    document.getElementById('mt_tva').value = montant_tva;
    document.getElementById('mt_ttc').value = montant_ttc;
}

function afficheLigne(n){



   /*let produit = 'moniteur';
   let index = d.indexOf(produit);
   var prix = p[index];
   document.getElementById('prix'+n).value = prix;
   document.getElementById('quantite'+n).value = 1;*/

}

