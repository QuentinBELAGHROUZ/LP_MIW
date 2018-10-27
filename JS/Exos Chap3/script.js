function printLength(text) {
    var size = document.getElementById('textarea').value.length;
    document.getElementById('text').value=size
}

function deleteContent(){
    document.getElementById('textarea').value = '';
    document.getElementById('text').value = '';
}

function checkFoorm(form){
    console.log('test');
}