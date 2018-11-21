//EXTENSION DE LA CLASSE STRING
String.prototype.left = function(n){
  return this.substring(0, n);
}

String.prototype.right = function(n){
  return this.substring(n);
}

String.prototype.capitalize = function(){
   return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
}

String.prototype.convertCss = function(){
  let tmp = this.split('-');
  let str = tmp[0];
  for(let i = 1; i < tmp.length; i++){
    str += tmp[i].capitalize();
  }
  return str;
}

let x = 5
let t1 = ['Thomas', 'Eric'];

//EXTENSION DE LA CLASSE ARRAY
Array.prototype.merge = function(t){
    return t1.concat(t);
}


//EXTENSION DE LA CLASSE NUMBER
Number.prototype.p = function(n){
    return Math.pow(x, n);
}

//EXTENSION DE LA CLASSE NODE
Node.prototype.changeId = function(val) {

}



function test() {
    let tmp = t1.merge(['Leo']);
    alert(tmp);
}
