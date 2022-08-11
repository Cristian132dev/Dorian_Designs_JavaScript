// *Metodos II:

// .from(iterable) - convierte en array el elemento iterable

let word = "hola mundo";

console.log(Array.from(word));
console.log(word.split(""));

// una funcion dentro de un objeto se llaman metodos
// una funcion que ejecuta otra funcion se llaman callbacks

// .sort([callback]) - ordena los elementos de un array alfabeticamente por su valor unicode, si le pasamos un callbacj los ordena en funcion al algoritmo que le pasemos

const letters = ["b", "c", "z", "a"]
const numbers = [1, 8, 100, 300, 3]

console.log(letters.sort())
console.log(numbers.sort())

console.log(numbers.sort((a, b) => a - b)
)

console.log("--------------------------")

// .forEach(callback (currentValue, [index])) - ejecuta la funcion indicada una vez por cada elemento del array

numbers.forEach((e, index) => console.log(`${e} esta en la posicion ${index}`));

// esta es otra manera de hacerlo, pero si un numero se repite solo va a hacer que se crashe, ya que el indexOf devuelve la posicion del primer elemento que encuentra. por ende hay que usar un ciclo for porque el contador nos ayuda a sacar el index exacto de cada posicion

numbers.push(100)
for (const number of numbers) {
   console.log(`${number} esta en la posicion ${numbers.indexOf(number)}`)
}

// .some(callback) - comprueba si al menos uno de los elementos del array cumple la condicion

// every(callback) - comprueba si todos los elementos del array cumplen la condicion

const words = ["HTML", "CSS", "JavaScript", "PHP"]

console.log(words.some(word => word.length > 9))
console.log(words.every(word => word.length > 2))

// .map(callback) - transforma todos los elementos del array y devuelve un nuevo array

numbers.map((number) => console.log(number * 2))

for (number of numbers) {
   console.log(number * 2);
}

// .filter(callback) - filtra todos los elementos del array que cumplan la condicion y devuelve un nuevo array

const numbers2 = numbers.filter((number) => number > 40)
console.log(numbers2)

// .reduce(callback) - reduce todos los elementos del array a un unico valor

console.log(numbers.reduce((a, b) => a + b))

const users = [
   {
      name: "user 1",
      online: true
   },
   {
      name: "user 2",
      online: true
   },
   {
      name: "user 3",
      online: false
   },
   {
      name: "user 4",
      online: false
   },
   {
      name: "user 5",
      online: false
   },
   {
      name: "user 6",
      online: true
   },

]

const usersOnline = users.reduce((cont, user) => {
   if (user.online) cont++
   return cont
}, 0)

console.log(`hay ${usersOnline} usuarios conectados`)