function printLength(text) {
    var size = document.getElementById('textarea').value.length;
    document.getElementById('text').value=size
}

function deleteContent(){
    document.getElementById('textarea').value = '';
    document.getElementById('text').value = '';
}

function exo4(n){
    document.open();
    document.write('<h1>'+ n +'</h1>');
    document.close();
}