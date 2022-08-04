/*
   Escribe un programa que pueda calcular el area de tres figuras geometricas, triangulo, rectangulo y circulo. en primer lugar, pregunta de que figura se quiere calcular el area, despues solicita los datos que necesites para calcularlo
      triangulo = b*h/2
      rectangulo = b*h
      circulo = pi * r2
*/

let pregunta = parseInt(prompt("Que area desea hallar??\n 1 - Triangulo \n 2 - Rectangulo \n 3 - Circulo"));

let base, altura, radio = "";


switch (pregunta) {
   case 1:
      base = parseInt(prompt("Cual es la base del triangulo en cm"));
      altura = parseInt(prompt("Cual es la altura del triangulo en cm"));

      alert(`El area del triangulo es ${(base * altura) / 2} cm2`)
      break;
   case 2:
      base = parseInt(prompt("Cual es la base del rectangulo en cm"));
      altura = parseInt(prompt("Cual es la altura del rectangulo en cm"));

      alert(`El area del rectangulo es ${base * altura} cm2`)
      break;
   case 3:
      radio = parseInt(prompt("Cual es el radio del circulo?"))

      alert(`el area del circulo es ${(Math.PI * radio**2).toFixed(2)} `)
      break;
   default:
      console.log("error, recargue la pagina he intente nuevamente");
      break;
}
