function nbOccurences(ch, c) {
    if(c=="")
    return 0;

    if(ch=="")
    return 0;

    var re = new RegExp(c, "g");
    if(ch.match(re) == null)
      return 0;
    return ch.match(re).length;
}

var array = [5, 10, 15];

function computeAverage(array){
  let sum = 0;
  for(let i in array)
    sum += parseFloat(array[i]);

  avg = sum / array.length;

  return avg;
}
