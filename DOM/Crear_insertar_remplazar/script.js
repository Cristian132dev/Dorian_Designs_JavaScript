/*
crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = codigo HTML

añadir un elemento al DOM: parent.appendChild(Element)

fragmentos de codigo: document.createDocumentFragment()
*/

const days = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

const title = document.getElementById("title");
const daysList = document.getElementById("daysList");
const selectDays = document.getElementById("daysSelect");

console.log(title, daysList, selectDays);

// para crear el elemento se usa createELement apuntando al document porque es ahi donde veremos representado nuestro elemento y de value la etiqueta que queremos.
const listItem = document.createElement("li")
// ya en este punto el elemento esta creado, pero no se veran cambios ya que no tiene ningun contenido
console.log(listItem)


// metemos el elemento creado en un constante para mas comodidad, pero ya sabemos que no es necesario
listItem.textContent = "lunes"

// para introducir nuestro elemento debemos apuntar a lo que sera su elemento padre
daysList.appendChild(listItem)


// para añadir etiquetas en nuestro codigo, no se puede con textContent, ya que el navegador lo interpretara como texto. para hacerlo bien debemos poner innerHTML, de esta manera detectara y aplicara las etiquetas correctamente

title.innerHTML = "DOM - <span>Crear e insertar elementos</span>"

// parece magia pero las etiquetas agregadas desde JS tambien se les aplicara estilos del CSS

// para inyectar codigo de manera eficiente desde el dom sin entorpecer la pag, se usa createDocumentFragment, con esto cargaremos todo el codigo que necesitemos inyectar y cuando este listo lo hacemos, ya que si nos ponemos uno a uno hara menos eficiente la pag

// el nombre de la variable se puede llamar como queramos pero es normal encontrarlo como fragment
const fragment = document.createDocumentFragment()

for (const day of days) {
   // creamos la etiqueta
   const listItem = document.createElement("li")
   // agregamos contenido a la etiqueta
   listItem.textContent = day
   // añadimos las etiquetas al fragmento
   fragment.appendChild(listItem)
}
console.log(fragment)

// ponemos las etiquetas en el documento
daysList.appendChild(fragment)

const fragment2 = document.createDocumentFragment()

for(const day of days){
   const selectItem = document.createElement("option")
   selectItem.textContent = day
   // selectItem.value = `${day}`
   selectItem.setAttribute("value", day.toLocaleLowerCase())
   fragment2.appendChild(selectItem)
}

selectDays.appendChild(fragment2)
console.log(selectDays);