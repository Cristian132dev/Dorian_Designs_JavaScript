/*
   document.getElementById("id") - acceder a un elemento a traves de su id

   element | document.querySelector("selectorCSS") - accede al primer elemento que coincida con el selector CSS

   element | document.querySelectorAll("selectorCSS") - accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/

const title = document.getElementById("title")

// el resultado sera igual al "$0" y se pueden mirar sus caracteristicas desde la misma consola, esta ves si se pueden llamar desde aqui
console.log(title.textContent)

// y la cereza del pastel, ya podemos cambiar el text content desde JavaScript \:D/
title.textContent = "DOM - Accediendo a nodos"


// el resultado sera igual al "$0" y para acceder al nodo debe ser un selector CSS es decir inician con punto o con hash o con cualquier selector CSS como firstChild y tambien se puede acceder desde un elemento como una etiqueta y no siempre desde document. este selector solo mostrara el primer elemento que encuentre, en este caso el primer parrafo de las 3 clases
const paragraph = document.querySelector(".paragraph")
const span = paragraph.querySelector("span")
// document.querySelector(".paragraph").paragraph.querySelector("span") = hay que ir bajando como una escalera

console.log(span.textContent)

// con querySelectorAll hay un detalle, aunque nos devuelve un nodeList, los nodeList no son arrays son objetos, por lo tanto no podemos usar metodos de arrays, a menos que lo convertemos
const paragraphs = document.querySelectorAll(".paragraph")

// con el spread operator podemos hacer el paso a array, pero aveces nos da errores o no funciona con algunos navegadores como zafari y firefox
const paragraphsSpread = [...document.querySelectorAll(".paragraph")]

// esta manera es la mas recomendada por temas de compatibilidad
const paragraphsArray = Array.from(document.querySelectorAll(".paragraph"))

// aqui no se edita el css, solo es para no complicarnos aun
paragraphs[0].style.color = "red"

// recorre cada elemento del ahora nuevo array y selecciona la etiqueta "p" y le cambia el color a verde
paragraphsArray.map((p) => p.style.color = "green")

console.log(paragraphs)
console.log(paragraphsArray)