function espacios(n) {
  var s = "";
  for (var i = 0; i < n; i++) s += " ";
  return s;
}

function quiz5 (r) {
  //for (var x = 0; x < r; x++) {
  //}
  var x = 0;
  var circulo = [];
  while (x <= r) {
    var y = Math.sqrt ( r * r - x*x);
    x++;
    var j = 0;
    var str = "";
    while ( j <= y) {
      str += "**";
      j++;
    }
    //console.log (x +  ', '+  y);
    //console.log (str);
    circulo.push(str);
  }
  for (var i = circulo.length -1; i >=0 ; i--) {
    console.log (circulo[i]);
  }
  for (var i = 0; i < circulo.length; i++) {
    console.log (circulo[i]);
  }
}

quiz5(7);
