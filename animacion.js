var cursor = document.getElementById('cursor');
var estilo = cursor.style;
var numLeft = 0
var numTop = 0;
var numRight = 450;
var numBottom = 450;
var tecla = document.keyCode;
var teclas = {izquierda: 37,	arriba: 38,	derecha: 39,	abajo:	40}


document.addEventListener("keydown", mover);

function mover (tecla)
{
  if(tecla.keyCode == teclas.izquierda)
  {
    if(numRight <= 450)
    {
      numLeft -= 1;
      numRight += 1;
      estilo.right =  numRight + "px";
      estilo.left  = numLeft + "px";
    }
  }
  else if(tecla.keyCode == teclas.arriba)
  {
    if(numBottom <= 450)
    {
      numTop -= 1;
      numBottom += 1;
      estilo.bottom = numBottom + "px";
      estilo.top = numTop + "px"
    }
  }
  else if(tecla.keyCode == teclas.derecha)
  {
    if(numLeft <= 450)
    {
      numLeft += 1;
      numRight -= 1;
      estilo.right =  numRight + "px";
      estilo.left  = numLeft + "px";
    }
  }
  else if(tecla.keyCode == teclas.abajo)
  {
    if(numTop <= 450)
    {
      numTop += 1;
      numBottom -= 1;
      estilo.bottom = numBottom + "px";
      estilo.top = numTop + "px"
    }
  }
}
