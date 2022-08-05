/*
   * Crea una clase Libro
   * La clase libro tendra titulo, autor, año y genero
   * crea un metodo que devuelva toda la informacion del libro
   * pide 3 libros y guardalos en un array
   * los libros se introduciran al arrancar el programa pidiendo los datos con prompt
   * validar que los campos no se introduzcan vacios
   * validar que el año sea un numero y que tenga 4 digitos
   * validar que el genero sea: aventuras, terror o fantasia
   crea una funcion que muestre los autores ordenados alfabeticamente
   crea una funcion que pida un genero y muestre la informacion de los libros que pertenezcan a ese genero usando el metodo que devuelve la informacion
*/

class Libro {
   constructor(titulo, autor, año, genero) {

      this.titulo = titulo;
      this.autor = autor;
      this.año = año;
      this.genero = genero;
   }

   info() {
      return `El libro ${this.titulo} fue escrito por ${this.autor} en el año ${this.año} y pertenece al genero ${this.genero}`
   }

}

/*
let libroPrueba = new Libro("minecraft", "notch", 2009, "VideoJuegos");
let libroPrueba = prompt(("titulo"), prompt("autor"), parseInt(prompt("año")), prompt("genero"));
let num = "2004"
const libros = [libroPrueba]
*/

const libros = []

for (let i = 0; i < 3; i++) {
   libros.push(new Libro(prompt("titulo"), prompt("autor"), parseInt(prompt("año")), prompt("genero")))
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

   if (libros[i].genero != "aventuras" && libros[i].genero != "terror" && libros[i].genero != "fantasia") {
      console.log("su programa fallo exitosamente, su genero no pertenece al deseado")
      break
   }
}
