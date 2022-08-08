/*
   * Crea una clase Libro
   * La clase libro tendra titulo, autor, año y genero
   * crea un metodo que devuelva toda la informacion del libro
   * pide 3 libros y guardalos en un array
   * los libros se introduciran al arrancar el programa pidiendo los datos con prompt
   * validar que los campos no se introduzcan vacios
   * validar que el año sea un numero y que tenga 4 digitos
   * validar que el genero sea: aventura, terror o fantasia
   * crea una funcion que muestre los autores ordenados alfabeticamente
   * crea una funcion que pida un genero y muestre la informacion de los libros que pertenezcan a ese genero usando el metodo que devuelve la informacion
*/

//!  MI SOLUCION DEL PROBLEMA

class Libro {
   constructor(titulo, autor, año, genero) {

      this.titulo = titulo;
      this.autor = autor;
      this.año = año;
      this.genero = genero;
   }

   info() {
      return `El libro ${this.titulo} fue escrito por ${this.autor} en el año ${this.año} y pertenece al genero "${this.genero}"`
   }

}

/*
let libroPrueba1 = new Libro("alien isolation", "zztop", 2016, "terror");
let libroPrueba2 = new Libro("minecraft", "notch", 2009, "VideoJuegos");
let libroPrueba3 = new Libro("outlast", "Biblia", 2013, "terror");
const libros = [libroPrueba1, libroPrueba2, libroPrueba3]
let libroPrueba = prompt(("titulo"), prompt("autor"), parseInt(prompt("año")), prompt("genero"));
*/
const libros = []


for (let i = 0; i < 3; i++) {
   libros.push(new Libro(prompt("titulo del libro #" + (i + 1)), prompt("autor  del libro #" + (i + 1)), parseInt(prompt("año  del libro #" + (i + 1))), prompt("genero del libro #" + (i + 1))))
   // isNaN comprueba si el numero es en verdad un numero y tambien verifica si se dejo en blanco el espacio
   // este if, verifica si hay espacios vacios
   if (libros[i].titulo == "" || libros[i].autor == "" || isNaN(libros[i].año) || libros[i].genero == "") {
      console.log("su programa fallo exitosamente")
      break
   }

   // este if verifica si el numero tiene 4 caracteres (hay que pasar el numero a string para poder medirlo)
   if ((libros[i].año).toString().length != 4) {
      console.log("su programa fallo exitosamente, el numero es menor o mayor de 4 caracteres")
      break
   }

   // este if verifica que el genero sea cualquiera de estos 3: aventura, terror, fantasia
   if (libros[i].genero != "aventura" && libros[i].genero != "terror" && libros[i].genero != "fantasia") {
      console.log("su programa fallo exitosamente, su genero no pertenece al deseado")
      break
   }
}

// funcion que ordena los autores, para ello cree un array que los guarde para poder ordenarlos
function ordenarAutores() {
   let autoresParaOrdenar = [];

   for (let i = 0; i < libros.length; i++) {
      autoresParaOrdenar.push(libros[i].autor)
   }

   console.log(autoresParaOrdenar.sort())
}
ordenarAutores()

// busca un genero y devuelve la informacion completa del metodo info
function buscarGenero() {
   let genero = prompt("que genero busca mi perro").toLowerCase()

   for (let i = 0; i < libros.length; i++) {
      if (libros[i].genero == genero) {
         console.log(libros[i].info())
      }
   }
}

buscarGenero()



//! SOLUCION DE DORIAN DESIGNS

class Book {
   constructor(title, author, year, gender) {
      this.title = title
      this.author = author
      this.year = year
      this.gender = gender
   }

   getAuthor() {
      return this.author
   }

   getGender() {
      return this.gender
   }

   bookInfo() {
      return `${this.title} es un libro de ${this.gender} escrito por ${this.author} en el año ${this.year}`
   }
}

let books = []

while (books.length < 3) {
   let title = prompt('Introduce el título del libro')
   let author = prompt('Introduce el autor del libro')
   let year = prompt('Introduce el año del libro')
   let gender = prompt('Introduce el género del libro').toLowerCase()

   if (title != '' &&
      author != '' &&
      !isNaN(year) &&
      year.length == 4 &&
      (gender == 'aventura' || gender == 'terror' || gender == 'fantasía')) {

      books.push(new Book(title, author, year, gender))

   }
}

const showAllBooks = () => {
   console.log(books);
}

const showAuthors = () => {
   let authors = []

   for (const book of books) {
      authors.push(book.getAuthor());
   }

   console.log(authors.sort());
}

const showGender = () => {
   const gender = prompt('Introduce el género a buscar')

   for (const book of books) {
      if (book.getGender() == gender) {
         console.log(book.bookInfo())
      }
   }

}

//showAllBooks()
//showAuthors()
showGender()


//! CONCLUSIONES

/*
mi solucion frente a la de dorian no es muy diferente, pero si hay cosas interesantes a resaltar.

1 - el llamado de los valores que necesitamos se hace desde la propia clase como un metodo y se retorna para ser utilizada desde una funcion fuera de la clase

2 - dorian afirmo que se puede hacer el recorrido de las preguntas con un for y si algo fallaba hay que ponerle i--, pero es mejor hacerlo con un while con la condicion que si el length del array sea inferior a 3 no se salga, y asi si ocurre un error, el prompt se repetira hasta que se cumplan las condiciones

3 - las condiciones las hizo en un solo if con todas dentro, y algo nuevo que aprendi es que si se pone dentro de parentesis los OR y uno se cumple, ese pedazo de codigo sera un true.

4 - crear un objeto no presisa de variable o constante, solo con instanciar la clase es suficiente

5 - el recorrido del array lo estuve haciendo mal, ya que yo utilize un for, cuando la mejor manera es con un for of, ya que recorre el array sin necesidad de contadores

lo bueno y motivador fue que la logica de programacion fue igual, solo se llego a la solucion de forma distinta
*/