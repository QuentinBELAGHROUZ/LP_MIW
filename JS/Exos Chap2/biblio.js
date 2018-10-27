function nombre(n) {
    var reg = /^[-+]?(\.\d+|\d+\.?|\d+)\d*$/;
    return reg.test(n);
}


function entierPositif(n) {
    return (nombre(n) && n >= 0 && Math.round(n) == n);
}

function pair(x) {
    return nombre(x) && x % 2 == 0;
}

function arrondi(x, n) {
    if(nombre(x)) {
        x = Math.round((x) * Math.pow(10, n)) / Math.pow(10, n);
        return x;
    }
}

function nbOccurences(c, ch) {
    var re = new RegExp(c, "g");
    var nb_occ = ch.match(re);

    return nb_occ.length;
}

function subsitue(c1, c2, c) {
    var reg = new RegExp(c1, "gi");
    c = c.replace(reg, c2);
}
