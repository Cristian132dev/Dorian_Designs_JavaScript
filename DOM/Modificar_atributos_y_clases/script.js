const title = document.getElementById("title");
const inputName = document.getElementById("name");

/*
   * Atributos: son las demas configuraciones que se ponen a las etiquetas para alterar su comportamiento

   - element.getAttribute("attribute") = devuelve un valor del atributo
   - element.setAttribute("attribute", value) = agregamos un valor al atributo
*/

console.log(inputName)

// el getAttribute devuelve el estado o valor del atributo del elemento
console.log(inputName.getAttribute("placeholder"))

// el setAttribute cambia el valor del atributo que le pasemos
inputName.setAttribute("placeholder", "te hackiamos perro")


/*
   * Clases:

   - element.classList.add("class", "class",...) = agrega clases indefinidamente
   - element.classList.remove("class", "class",...) = elimina una clase o las que queramos
   - element.classList.contains("class") = devuelve true o false, si tiene o no la clase
   - element.classList.replace("oldClass", "newClass")

   - element.classList.togle("class" [,force]) = si tiene la clase, se la quita y si no la tiene se la pone
*/

title.classList.add("main-title")
title.classList.remove("main-title")

if (title.classList.contains("main-title")) {
   console.log("la etiqueta si contiene la clase")
} else {
   console.log("la etiqueta no contiene la clase")
}

title.classList.replace("title", "main-title")


/*
   * "Atributos Directos": nombre que le dio dorian xD, y se refiere a los atributos de los elementos que no se pueden desplegar

*/

// console.log(title.innerHTML = "<strong>JavaScrip</strong> es <i>la polla</i>")
console.log(title.innerHTML)   // innerHTML devuelve el codigo con el que fue escrito el elemento, e incluso lo podemos modificar con etiquetas y atributos
console.log(title.textContent) // directamente textContent nos entrega solo la cadena string del elemento solicitado

console.log(inputName.value.length)