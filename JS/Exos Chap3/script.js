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

function exo8(){
    let tmp = document.getElementById('produit').value;
    tmp = tmp.split(',');
    document.getElementById('ref').value = tmp[0];
    document.getElementById('prix').value = tmp[2];
    document.getElementById('montant').value = tmp[2] * parseInt(document.getElementById('quantite').value)

}