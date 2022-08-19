const input = document.getElementById("input")
const form = document.getElementById("form")
const button = document.getElementById("button")
const link = document.getElementById("link")

input.addEventListener("keyup", (e) => {
   console.log(e)
})

// se puede escuchar eventos sin necesidad de estar apuntandole a algo, pero en realidad es que se le aputa a window, que es la interfaz que alberga al dom

//* alert() == window.alert

addEventListener("click", (e) => {
   console.log(e.key)
})

button.addEventListener("click", (e) => {
   console.log(e.target)
})

// tenemos un metodo presente en el objeto del evento, que nos permite cancelar el comportamiento por default de los elementos. internamente cambia los true por false para evitar que funcione

form.addEventListener("submit", (e) => {
   e.preventDefault()
   console.log("El programa no envio el formulario porque lo evitaste :(")
})

link.addEventListener("click", (e) => {
   e.preventDefault()
   console.log("No podemos cargar un link, tu no dejas maldito :(")
})

// para forzar que el programa haga lo que queramos podemos hacerlo, poniendo el objeto y posterior el evento que queremos forzar que ejecute, incluso que pulse un boton desde otra funcion, mas que forzar, se simula el evento

form.submit()

/* const gallery = document.getElementById("gallery")

// si se escucha un padre, con target podemos escuchar a los hijos, sin necesidad de muchas lineas
gallery.addEventListener("click", (e) => {
   if(e.target.childElementCount != 9){
      e.target.classList.toggle("clickeado")
   }
}) */