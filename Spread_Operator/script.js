// El Spread Operator u operador de expansion convierte los elementos de un array en una cadena literal, y sirve para pasar esos elementos como argumentos, ya sean de una funcion, un array o una instancia de un objeto

// su sintaxis son tres puntos ...

const numbers = [-12, 2, 3, 23, 43, 2, 3];

console.log(numbers)
console.log(...numbers)

// tiene varios usos

// Enviar elementos de un array a una funcion
const addNumbers = (a, b, c) => {
   console.log(a + b + c)
}

let numbersToAdd = [1, 2, 3]

addNumbers(...numbersToAdd)


// añadir elementos de un array a otro

let users = ["Carlos", "Pedro", "Freddy", "Maikel"]
let newUsers = ["Sofia", "Monica", "Antonela"]

users.push(...newUsers)

console.log(users)


// Copiar arrays

let arr1 = [1, 2, 3, 4]

let arr2 = [...arr1]
console.log(arr2)


// concatenar arrays

let array1 = [1, 2, 3, 4, 5]
let array2 = [6, 7, 8, 9]

let arrayConcatenado = [...array1, ...array2]

// este es un metodo correcto tambien
// let arrayConcatenado = array1.concat(array2)

console.log(arrayConcatenado)


// Enviar un numero indefinido de argumentos a una funcion (parametros REST)

const restParms = (...numbers) => {
   console.log(numbers)
}

// no importa cuantos parametros pasemos, la funcion las recibira, esto es util porque cuando nos conectamos a una api no sabemos cuantos parametros usara la funcion
restParms(1, 2, 3, 4, 5, 6, 7, 9, 5)


// Libreria Math
console.log(Math.max(...numbers))
console.log(Math.min(...numbers))


//Eliminar elementos duplicados (set: no permite elementos duplicados)
console.log(new Set(numbers))

// pero si los queremos dentro de corchetes es asi
console.log([...new Set(numbers)])


// instanciar objetos

class Persona{
   constructor(nombre, edad, documento){
      this.nombre = nombre;
      this.edad = edad;
      this.documento = documento
   }
}

const datos = ["Cristian", 18, 1007659440]

console.log(new Persona(...datos))