let r = ['01', '02', '03', '04', '05'];
let d = ['ecran', 'clavier', 'souris', 'imprimante', 'enceinte'];
let p = [150, 20, 10, 100, 50];

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
    console.log('ok');
}