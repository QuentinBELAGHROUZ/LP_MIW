function exo2() {
    var n = prompt('Saisissez un nombre : ');
    if (pair(n))
        alert('Le nombre ' + n + ' est pair');
    else
        alert('Le nombre ' + n + ' est impair');
}

function exo3() {
    var n1 = prompt('Saisissez un premier nombre : ');
    var n2 = prompt('Saisissez un second nombre : ');
    var n3 = prompt('Saisissez un troisieme nombre : ');

    if (nombre(n1) && nombre(n2) && nombre(n3)) {
        var somme = parseInt(n1) + parseInt(n2) + parseInt(n3);

        var moy = (n1 + n2 + n3) / 3;

        if (n1 > n2)
            n2 = [n1, n1 = n2][0];
        if (n2 > n3)
            n3 = [n2, n2 = n3][0];
        if (n1 > n2)
            n2 = [n1, n1 = n2][0];

        alert(n1 + " + " + n2 + " + " + n3 + " = " + somme);
        alert('Nombre le plus petit : ' + n1 + '\nNombre le plus grand : ' + n3);
        alert('Dans l\'ordre croissant : ' + n1 + ' < ' + n2 + ' < ' + n3);
    } else
        alert("Erreur ! il fallait utiliser 3 nombres");
}

function exo4() {
    do {
        var n = prompt('Saisir un nombre entier positif N :');
    } while (entierPositif(n) != true)

    n = parseInt(n);
    var s = n * (n + 1) / 2;
    alert("Somme des " + n + " premiers nombres : " + s);
}

function surfCarre(c) {
    return c * 4;
}

function surfRectangle(c, l) {
    return 2 * c + 2 * l;
}

function surfCercle(r) {
    return arrondi(Math.PI * Math.pow(r, 2), 2);
}

function exo5() {
    var rep = prompt("Saisir le type de surface à calculer (carre/rectangle/cercle? ) : ");

    var surface = 0;

    switch (rep) {
        case 'carre':
            var c = prompt('longueur d\'un côté :');
            surface = surfCarre(c);
            alert('Surface du carré : ' + surface);
            break;
        case 'rectangle':
            var c = prompt('largeur d\'un côté :');
            var l = prompt('longueur d\'un côté :');
            surface = surfRectangle(c, l);
            alert('Surface du rectangle : ' + surface);
            break;
        case 'cercle':
            var r = prompt('dimension du rayon : ');
            surface = surfCercle(r);
            alert('Surface du cercle : ' + surface);
            break;
        default:
            alert('Erreur! saisie incorrecte');
    }
}

function exo6() {
    var mdp = 'azerty';
    var rep = prompt('Saisissez le mot de passe : ');

    if (mdp == rep)
        exo4();
    else
        window.location.reload();
}

function exo7() {
    var tab = [];
    for (var i = 1; i <= 50; i++)
        tab.push(Math.pow(i, 2));
    alert(tab.join('\n'));
}

function exo8() {
    var n1 = prompt('Saisir un premier nombre : ');
    n1 = parseInt(n1);
    var n2 = prompt('Saisir un second nombre : ');
    n2 = parseInt(n2);

    document.write('<table><tr> <th>Nombre(s) pairs entre ' + n1 + ' et ' + n2 + '</th></tr>');
    for (var i = n1; i <= n2; i++) {
        if (pair(i))
            document.write('<tr><td>' + i + '</td></tr>');
    }
    document.write('</table>');
    document.close();
}

function exo9() {
    do {
        var n = prompt("Saisissez un nombre entre 2 et 9 : ");
    } while (!entierPositif(n) || n < 2 || n > 9)

    document.write('<h3>Table de multiplication de ' + n + '</h3>');
    document.write('<table><tr> <th>X</th><th>Y</th></tr>');
    for (var i = 1; i <= 10; i++)
        document.write('<tr><td>' + n + "x" + i + '</td><td>' + n * i + '</td></tr>');

    document.close();
}

