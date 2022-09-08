//* Insertar y eliminar elementos II

const list = document.getElementById("list")

const newElement = document.createElement("li")
newElement.textContent = "i am a new element :D"

// parent,insertBefore(newElement, referenceElement) - insertar un elemento antes del elemento de referencia
list.insertBefore(newElement, list.children[0])

/***
 //* Positions:

 * beforebegin - antes de que empiece (hermano anterior)
 * afterbegin - despues de que empiece (primer hijo)
 * beforeend - antes de que termine (ultimo hijo)
 * afterend - despues de que acabe (hermano siguiente)
*/

// parent.insertAdjacentElement(position, element) - inserta etiquetas (en este caso la etiqueta va con un contentText incluido we)
list.insertAdjacentElement("beforeend", newElement)
// para evitar que el elemento se se salga y quede como hermano habra que poner el objeto.children[0] y asi no terminara fuera, o simplemente ponerlo antes o despues, como convenga para que no se salga

// parent.insertAdjaentHTML(position, html) - inserta codigo, aunque no es muy utilizado, hasta donde tengo entendido la mejor manera de añadir codigo en bruto para html desde aqui es con createDocumentFragment
list.insertAdjacentHTML("beforeend", "<li>elemento con html insertado desde JS</li>")

// parent.insertAdjacentText(position, text) - inserta texto ¯\_(ツ)_/¯
list.insertAdjacentText("afterbegin", "Hi, I'm a text")


//* Remplazar
//parent.replace(newChild(newChild, oldChild) - remplaza un nodo por otro)

list.replaceChild(newElement, list.children[0])


/****************
 * todo: para tener en cuenta

 * hay una libreria que se llama JQuery que sirve para facilitar la escritura de codigo de javascript, en el cual, se acortan las estructuras de los comandos de codigo.
 * con el pasar del tiempo algunos de estos "atajos" se han traido estos atajos a javascript, el unico impedimento era IE, pero como ya no esta entre nosotros, cada vez son mas aceptados por los desarrolladores a utilizarsen porque son mas sencillos de utilizar
 * pasando de codigo tan engorroso como este (parent.createAdjacentElement("position", element), a (parent.position(element) ) codigo muchisimo mas corto y hasta mejor de codear, ya que se estarian aprendiendo dos tecnologias
 */

const list2 = document.getElementById("list2");
const toReplace = document.getElementById("child-to-replace")
const newElement2 = document.createElement("li");
newElement2.textContent = "hola soy nuevo en esta pagina"

//* Insertar

/*
   parent.before() - antes de que empieze (hermano mayor)
   parent.prepend() - despues de que empieze (primer hijo)
   parent.append() - antes de que acabe (ultimo hijo)
   parent.after() - despues de que acabe (hermano menor)
*/

list2.append(newElement2)

//* remplazar

// child.replaceWith(newChild)

// list2.children[0].replaceWith(newElement)
toReplace.replaceWith(newElement2)


//* Clonar

/*
   element.cloneNode(true | false) - clona el nodo
      true - clona el elemento con los hijos
      false - clona el elemento sin hijos
*/

list2.after(list2.cloneNode(true))


//* Eliminar

/*
   element.remove() - elimina el nodo del DOM
   element.removeChild(child) - elimina el nodo hijo del DOM
*/

list.remove()

list2.removeChild(list2.children[1])