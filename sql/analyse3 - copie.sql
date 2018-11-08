   <h3>Exercice 3</h3>
    <form>
        <input type="text" id="euro" placeholder="Euros">
        <input type="text" id="franc" placeholder="Francs"><br>
        <input type="button" value="Convertir" onclick="convertisseurDevise()">
        <input type="reset">
    </form>


function convertisseurDevise(){
    euro = document.getElementById('euro').value;
    franc = document.getElementById('franc').value;

    if(franc == '' && euro != ''){
        franc = euro * 6.55;
        document.getElementById('franc').value = franc;
    }
    else if(franc != '' && euro == ''){
        euro = Math.round((franc / 6.55)*100)/100;
        document.getElementById('euro').value = euro;
    }
    else if(franc != '' && euro != '')
        alert('Saisissez une seule valeur !');
    else
        alert('Saisissez une somme à convertir');
}