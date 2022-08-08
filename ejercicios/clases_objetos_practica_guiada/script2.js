/*
   * Crea una clase Libro
   * La clase libro tendra titulo, autor, año y genero
   * crea un metodo que devuelva toda la informacion del libro
   * los libros se introduciran al arrancar el programa pidiendo los datos con prompt
   * pide 3 libros y guardalos en un array
   * validar que los campos no se introduzcan vacios
   * validar que el año sea un numero y que tenga 4 digitos
   * validar que el genero sea: aventura, terror o fantasia
   * crea una funcion que muestre los autores ordenados alfabeticamente
   crea una funcion que pida un genero y muestre la informacion de los libros que pertenezcan a ese genero usando el metodo que devuelve la informacion
*/

class Book {

   constructor(title, author, year, gender) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.gender = gender;
   }

   info() {
      return `El libro ${this.title} fue escrito por el escritor: ${this.author}, en el año ${this.year} y pertenece al genero "${this.gender}"`
   }

   getAuthors() {
      return this.author
   }

   getGender() {
      return this.gender
   }
}

let books = [];

while (books.length < 3) {
   let title = prompt("Cual es el titulo del libro?")
   let author = prompt("Cual es el autor del libro?")
   let year = prompt("Cual es el año del libro?")
   let gender = prompt("Cual es el genero del libro").toLowerCase()

   if (
      title != "" &&
      author != "" &&
      !isNaN(year) &&
      gender != "" &&
      (gender == "terror" || gender == "aventura" || gender == "fantasia")) {
      books.push(new Book(title, author, year, gender))
   }
}

const sortAuthors = () => {
   let arrayAuthors = []
   for(const book of books){
      arrayAuthors.push(book.getAuthors())
   }
   console.log(arrayAuthors.sort())
}

sortAuthors()

const showGender = () => {
   let gender = prompt("Ingrese el genero que desea buscar")
   for(const book of books){
      if(book.getGender() == gender){
         console.log(book.info())
      }
   }
}

showGender()