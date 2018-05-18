var name = prompt ('Ingresa tu nombre por favor');
var name1 = document.getElementById('name');
name1.textContent = name.toUpperCase();
function not(){
  alert('Que pena! te lo perdiste :(');
}
function yes(){
  alert('Entonces comencemos :)');
    var x=document.getElementById('oculto');
    if(x.style.display==="block")
  {x.style.display="none";
} else {
  x.style.display="block";
}
}



function aa() {
  var a1C=document.getElementById("a1C");
  a1C.textContent = "PERU";
  document.getElementById("btn2").disabled = true;
  document.getElementById("btn3").disabled = true;
}
function bb(){
  var a11INC=document.getElementById("a11INC");
  a11INC.textContent = "RUSIA";
  document.getElementById("btn1").disabled = true;
  document.getElementById("btn3").disabled = true;
}
function cc(){
  var a12INC=document.getElementById("a12INC");
  a12INC.textContent = "PANAMA";
  document.getElementById("btn2").disabled = true;
  document.getElementById("btn1").disabled = true;
}
function dd(){
  var a21INC=document.getElementById("a21INC");
  a21INC.textContent = "KOREA";
  document.getElementById("btn5").disabled = true;
  document.getElementById("btn6").disabled = true;
}
function ee(){
  var a2C=document.getElementById("a2C");
  a2C.textContent = "ISLANDIA";
  document.getElementById("btn4").disabled = true;
  document.getElementById("btn6").disabled = true;
}
function ff(){
  var a22INC=document.getElementById("a22INC");
  a22INC.textContent = "JAPON";
  document.getElementById("btn5").disabled = true;
  document.getElementById("btn4").disabled = true;
}
function gg(){
  var a31INC=document.getElementById("a31INC");
  a31INC.textContent = "NAVARRETE";
  document.getElementById("btn8").disabled = true;
}
function hh(){
  var a3C=document.getElementById("a3C");
  a3C.textContent = "PANINI";
  document.getElementById("btn7").disabled = true;
}
