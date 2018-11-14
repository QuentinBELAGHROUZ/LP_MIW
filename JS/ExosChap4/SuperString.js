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

String.prototype.trim() = function(){
  let regex = /^
}

//EXTENSION DE LA CLASSE ARRAY
Array.prototype.merge()


function test(){
  let str = 'background color ';
  alert(str.convertCss());
}
