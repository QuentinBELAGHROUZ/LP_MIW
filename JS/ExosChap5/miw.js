//----------FONCTIONS RACCOURCIES------------
//pour acceder à un element dont l'ID = id
function _id(id){
    return document.getElementById(id);
}

//pour acceder aux elements dont le nom est n
function _tn(n){
    return document.getElementsByTagName(n);
}

//pour acceder à un element dont l'attribut NAME = n
function _n(n){
    return document.getElementsByName(n);
}

//pour acceder à tous les elements satisfaisant au selecteur css
function _css(css){
    return document.querySelectorAll(css);
}

//pour creer un fragment
function _cf(){
   return document.createDocumentFragment();
}

//pour creer un element dont le nom est el. Si le deuxieme argument est present,
// le nouveau noeud sera ajouté à nodeIns
function _ce(el, nodeIns) {
    let element = document.createElement(el);

    if(nodeIns)
        return nodeIns.appendChild(element);

    return element;
}

//pour creer un noeud texte dont la valeur est tx. Si le deuxieme argument est present,
// le deuxieme noeud texte sera ajouté à NodeIns
function _ct(tx, nodeIns){
    let texte = document.createTextNode(tx);
    if(nodeIns){
        let noeud = document.createElement(nodeIns);
        return noeud.appendChild(texte)
    }
    return texte;

}

//pour creer un element node dont les attributs seront dans l'objet attribut et les
// proprietes style dans l'objet style
//si le quatrieme argument est present, le noueau element sera ajoute au noeud NodeIns
function _cn(node, attribut, style, nodeIns){
    let noeud = document.createElement(node);

    for(let i in attribut){
        noeud.setAttribute(attribut[i])
    }
}





function test(){
    var label = _ct('mon nom', 'label');
    document.getElementsByTagName('body')[0].appendChild(label);
}