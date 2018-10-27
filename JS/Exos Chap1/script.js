function f1() {
    alert("Bienvenue dans mon site");
}

function f3() {
    test = confirm("Voulez-vous continuer?");
    if (test)
        alert("Réponse : OK");
    else
        alert("Réponse: ANNULER");
}

function f4() {
    var url = document.location.href;
    var date_maj = document.lastModified
    date_maj = date_maj.split(" ");

    alert("date mise à jour : " + date_maj[0] + " \n url : " + url);
    //date maj
}

function f5() {
    var saisie = prompt("Saisissez votre nom et votre prenom", "belaghrouz quentin");
    var tmp = saisie.split(" ");
    var nom = tmp[0].toUpperCase();
    var prenom = tmp[1].charAt(0).toUpperCase() + tmp[1].substring(1).toLowerCase();
    alert("Nom : " + nom + "\nPrenom : " + prenom);

}

function f7() {
    var nav = navigator.appCodeName;
    var version = navigator.appVersion;
    var langage = navigator.language;
    var systeme = navigator.platform;

    alert("Nom du navigateur : " + nav + "\n Version : " + version + "\n Langage : "
        + langage + "\n Systeme : " + systeme);
}

function f8() {
    var nom = prompt("Saisissez votre nom", "belaghrouz");
    var prenom = prompt("Saisissez votre prenom", "quentin");
    var premierscaracteres = nom.charAt(0) + nom.charAt(1) + nom.charAt(2);
    var taille_prenom = prenom.length;
    var tmp = prenom.charAt(taille_prenom - 3) + prenom.charAt(taille_prenom - 2) + prenom.charAt(taille_prenom - 1);
    alert("Nombre de caracteres dans le nom : " + nom.length + "\nNombre de caracteres dans le prenom : "
        + prenom.length + "\nTrois premiers caracteres du nom : " + premierscaracteres + "\nTrois derniers caracteres du prenom : "
        + tmp);
}

function f9() {
    var n1 = prompt("Saisissez un premier nombre réel", 3.14);
    n1 = parseFloat(n1);
    var n2 = prompt("Saisissez un second nombre réel", 2.37);
    n2 = parseFloat(n2);
    var tmp = n1 + n2;

    alert("Résultat = " + tmp + "\nValeure max = " + Math.max(n1, n2) + "\nEntier >= à " + n1 + " = " + Math.ceil(n1)
        + "\nEntier <= à " + n2 + " = " + Math.floor(n2));
}

function f10() {
    window.open('pop_up.html', 'nom_de_ma_popup', 'menubar=no, scrollbars=no, top=100, left=100, width=300, height=200');
}

function f11() {
    var saisie = prompt("Saisissez une chaine de mots séparés par un '_'", "orange_citron_fraise");
    var res = saisie.replace(/_/gi, "/");
    alert(res);
}

function f12() {
    var prenom = prompt("Saisissez votre prenom", "quentin");
    w = open("", 'popup', 'width=400,height=200,toolbar=no,scrollbars=no,resizable=yes');
    w.document.write("<h1>" + prenom + "</h1>");
}

function f13(option) {
    var regex = new RegExp("[1-2]\\s*[0-9]{2}\\s*[0-9]{2}\\s*(2[AB]|[0-9]{2})\\s*[0-9]{3}\\s*[0-9]{3}\\s*[/]\\s*[0-9]{2}", "gi");

    if (option == 1) {
        var chaine = "1 97 05 13 056 032 / 04";
        var tmp = chaine.replace(/[0-9]/gi, '*');
        alert(tmp);

    } else if (option == 2) {
        var chaine = "1 97 05 13 056 032 / 04erèfefefefé1 97 05 13 056 032 / 04sù$adzfzf0";
        var found = chaine.match(regex);
        alert(found.toString());
    } else {
        var saisie = prompt("Saisissez votre numéro de sécurité sociale", "1 97 05 13 056 032 / 04");

        if (regex.test(saisie))
            alert("Numéro de sécurité sociale valide");
        else
            alert("Numéro de séucrité sociale invalide");
    }
}

function f14(){
    var T = [45, 48, 89, 78];
    var V = new Array(110, 128, 129, 178);
    var nb1 = prompt("Saisir un nombre (T): ");
    var nb2 = prompt("Saisir un nombre (T): ");

    T.push(nb1);
    T.unshift(nb2);
    alert("tableau T : " + T.join('-'));

    var Z = T.concat(V);
    Z = Z.splice(2, Z.length);
    Z = Z.splice(0, Z.length-2);
    alert("tableau Z : " + Z.join('/'));
}


function exoCours() {
    var mails = ['leo@orange.fr', 'lina@hotmail.com', 'bernard@orange.fr', 'Kirl@gmail.com'];
    var saisie = prompt("Saisissez le nom de l'hebergeur", 'orange');
    var regex = new RegExp("[a-zA-Z0-9.-_]{1,15}[@]" + saisie + "[.]{1}[a-z]{1,5}", "gi");
    var liste_mails = mails.join('-');
    alert(liste_mails);
    var found = liste_mails.match(regex);
    alert(found.toString());
}