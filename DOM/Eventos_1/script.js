/*
   Un evento es cualquier cosa que sucede en nuestro documento

   antes se llamaba los eventos desde el html:
   <p onclick="saludo()"> Soy un parrafo </p>

   esto ahora no es recomendable hacer, porque es mejor no combinar codigo, a menos que sea de un framework como angular, es distinto porque en esa libreria se trabaja con componenetes y es literal mesclar, javascript con html, asi que ahi si es valido

   * Eventos de raton:
   -  click - cuando pulsamos el boton izquierdo del raton
   -  dblclick - cuando pulsamos dos veces seguidas el boton izquierdo del raton
   -  mouseenter - cuando entramos en la zona que tiene el evento
   -  mouseleave - cuando salimos de la zona que tiene el evento
   -  mousedown - cuando pulsamos y no soltamos el boton izquierdo del raton
   -  mouseup - cuando soltamos el boton izquierdo del raton
   -  mousemove - cuando movemos el raton

   * Eventos del teclado:
   -  keydown - cuando pulsamos una tecla
   -  keyup - cuando soltamos una tecla
   -  keypress - cuando pulsamos una tecla y no la soltamos
*/

const button = document.getElementById("button");
const box = document.getElementById("box");
const input = document.getElementById("input");

button.addEventListener("dblclick", () => {
   alert("doble click!!")
})


// cambiar los colores ya vemos que no se hace desde javascript, sino que se crea una clase en css y la aplicamos desde aqui, asi nuestro codigo se ve limpio con cada cosa en su lugar
box.addEventListener("mouseenter", () => {
   box.classList.replace("mouseLeave", "mouseEnter")
})

box.addEventListener("mouseleave", () => {
   box.classList.replace("mouseEnter", "mouseLeave")
})


box.addEventListener("mouseup", () => {
   alert("has soltado la caja")
})

box.addEventListener("mousemove", () => {
   console.log("te estas moviendo dentro de la caja we")
})


input.addEventListener("keydown", (e) => {
   if (e.code == "Enter") {
      alert("Pulsaste el Enter")
   }
})
console.log(button)
/* input.addEventListener("keyup", () => {
   console.log("dejaste de pulsar una tecla")
})

input.addEventListener("keypress", () => {
   console.log("estas manteniendo una tecla")
})
 */

