<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Exo AJAX</title>

<script>
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

    function recup(r){
        var itemsnom = r.getElementsByTagName('nom');
        console.log(itemsnom)

        for(i=0; i < itemsnom.length; i++){
            alert(itemsnom[i].firstChild.data);
        }

        var n = document.getElementsByTagName("a")[0];
        n.parentNode.removeChild(n);

        var nouveauForm = document.createElement("form");
        var nouveauSelect = document.createElement("select");

        for(var i = 0; i < itemsnom.length; i++){
            var nouveauOP = document.createElement("option");
            var nouveautextOP = document.createTextNode(itemsnom[i].firstChild.data);
            nouveauOP.appendChild(nouveautextOP);
            nouveauSelect.appendChild(nouveauOP);
        }
        nouveauForm.appendChild(nouveauSelect);
        document.getElementsByTagName("body")[0].appendChild(nouveauForm);
    }

    function ajax(){
        var req = new Xhr();
        console.log(req);
        req.onreadystatechange = function(){
            if(this.readyState===this.DONE)
                recup(this.responseXML);
        }
        req.open("GET", "reponse.php", true);
        req.send(null);
    }

    function recupListe(r){
        var items = r.getElementsByTagName("choix");
        document.getElementById("produit").innerHTML = "";
        for(let i in items){
            let nouveauOP2 = document.createElement('option');
            let nouveautextOP2 = document.createTextNode(items[i].firstChild.data);
            option.appendChild(nouveautextOP2);
            document.getElementById('produit').appendChild(nouveauOP2);
        }
    }

    function ajax2(){
        var req = Xhr();
        req.onreadystatechange = function(){
            if(this.readyState===this.DONE)
                recupListe(this.responseXML);
        };

        req.open("GET", 'reponse.php?cat='+document.getElementById('categorie').value, true);
        req.send(null);
    }

</script>
</head>
<body>
<div>
    <div>
        Voici le resultat : <span id="resultat"></span>
    </div>

    <a href="javascript:ajax();">Cliquez-ici</a>
</div>
</body>
</html>
