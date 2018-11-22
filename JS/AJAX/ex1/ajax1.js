function Xhr(){
    var obj = null;
    try{
        obj = new ActiveXObject("Microsoft.XMLHTTP");
    }catch(Error) {
        try{
            obj = new ActiveXObject("MSXML2.XMLHTTP");
        }catch (Error) {
            try{
                obj = new XMLHttpRequest();
            }catch (Error) {
                alert('Impossible de creer lobjet XMLHttpRequest');
            }
        }
    }
    return obj;
}

function ajax(){
    var req = new Xhr();

    req.open("GET", "reponse.txt", false);
    req.send(null);

    let reponseTxt = req.responseText;
    let tableau_choix = reponseTxt.split('-');
    console.log(tableau_choix);

    var nouveauForm = document.createElement("form");
    var nouveauSelect = document.createElement("select");
    nouveauSelect.setAttribute('onchange', 'printOption()');
    for(let i in tableau_choix){
        var nouveauOP = document.createElement("option");
        var nouveauTextOP = document.createTextNode(tableau_choix[i]);
        nouveauOP.appendChild(nouveauTextOP);
        nouveauSelect.appendChild(nouveauOP);
    }
    nouveauForm.appendChild(nouveauSelect);
    document.getElementsByTagName("body")[0].appendChild(nouveauForm);



}

function printOption(){
    //document.getElementById("resultat").appendChild();
    //document.getElementsByTagName("a")[0].style.visibility = "hidden";
    let reponse = document.createTextNode('choix'+document.getElementsByTagName('select')[0].selectedIndex);
    document.getElementById('resultat').appendChild(reponse);
}
