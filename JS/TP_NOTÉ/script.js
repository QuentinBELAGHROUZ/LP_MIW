document.forms["test"].addEventListener("submit", function(e) {
    var inputs = this;
    var erreur;

    for (var i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        if (!inputs[i].value) {
            erreur = "Veuillez renseigner tous les champs";
            break;
        }
    }

    //-------------
     nom = document.getElementById('nom');
     prenom = document.getElementById('prenom');
     adresse = document.getElementById('adresse');
     code_postal = document.getElementById('code_postal');
     telephone = document.getElementById('telephone');
     email = document.getElementById('email');

     if(!verifCodePostal(code_postal))
        erreur = 'Code postal invalide';


    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert('Formulaire envoyé !');
    }
});

function verifCodePostal(code_postal){
    var reg_cp = /^(([0-8][0-9])|(9[0-5]))[0-9]{3}$/;
    return reg_cp.test(code_postal);
}

function verifTelephone(telephone){
    var reg_tel = /^$/;
    return reg_tel.test(telephone);
}