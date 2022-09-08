const button = document.getElementById("button");

/*
   Objeto window - es el objeto global, de el descienden todos los objetos
      alert() = window.alert()
      prompt() = window.prompt() - no recomendable de usar y ya que detiene la carga de la pag, usar input text
      confirm() = window.confirm() - booleano, devuelve true o false si se acepta o se cancela en el recuadro
      document = window.document
      addEventListener() = window.addEventListener() - este en particular es usado para captar eventos sin apuntarle a nada, como "load" o "scroll"
*/

// (confirm("acepta?")) ? console.log("el usuario acepto") : console.log("el usuario no acepto :/");

/* Objeto console - es el objeto que contiene la consola del navegador
   https://developer.mozilla.org/es/docs/web/API/Console
   console.log()
   console.dir() - en el caso de que console.log nos devuelva una linea que no se puede expandir, con este nos dejara
   console.table() - nos despliega un objeto o array dentro de una tabla mas legible
*/

/* const person = {
   name: "Dorian",
   age: 35,
   email: "cristian132dev@gmail.com",
   live: true,
}

const array = [1, 2, 3, 4, 5]

console.log(person);
console.table(person);

console.log(array);
console.table(array); */

/* Objeto location - es ele objeto que contiene la barra de direcciones
   https://developer.mozilla.org/es/docs/web/API/Location
   location.href - muestra la url del sitio y se puede usar para cambiar de url
   location.protocol - devuelve el protocolo de la pagina(http, https, ftp)
   location.host - devuelve la direccion principal del dominio
   location.pathname - devuelve la ruta despues del host
   location.hash - envia parametros y en funcion del hash cambia el dom
   location.reload - recarga la pagina(poner dentro de un if, si se pone suelto genera un bucle)
 */


/* Objeto history - trabaja con el historial de la pestaña
   history.length - cantidad de paginas en el historial de la pestaña
   history.back - hacia atras
   history.forward - hacia adelante
   history.go(n|-n) -  indicamos cuantas paginas hacia adelante o atras queremos movernos
*/

/* Objeto Date
todo: pa investigar xD
*/

/* Timers
- Timeout:
   setTimeout(() =>{code}, delay in miliseconds) - hace que se ejecute la funcion de delay. si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)

   setInterval(() => {code}, delay in miliseconds) - hace que se ejecute la funcion cada delay milisegundos, si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)
*/

/* button.addEventListener("click", () => {
   setTimeout(saludar, 3000)
})

button.addEventListener("click", () => {
   const timeout = setTimeout(() => {console.log("adios")}, 3000)

   clearTimeout(timeout)

}) */


const saludar = () => console.log("Hola");

// const interval = setInterval(saludar, 1000)

let i = 1;
setInterval(()=>{
   console.log(i);
   i++
},1000)