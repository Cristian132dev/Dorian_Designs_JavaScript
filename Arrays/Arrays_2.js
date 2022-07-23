let numbers = [1, 2, 3, 4, 5];

// Array.length - devuelve el numero de valores que contiene el array
console.log(numbers.length);

// Array.isArray(n) - devuelve true o false si el elemento es array o no
console.log(Array.isArray(numbers));
console.log(Array.isArray(4));


/***********
 * Eliminar elementos */

// .shift() - elimina el primer elemento del array y devuelve ese elemento
let first_delete_element = numbers.shift()
console.log(first_delete_element);
console.log(numbers);

// .pop() - elimina el ultimo elemento y devuelve ese elemento
let last_delete_element = numbers.pop()
console.log(last_delete_element);
console.log(numbers);


/********
 * añadir elementos */

// .unshift(element1, element2 ....) - añade uno o mas elementos al comienzo del array y devuelve la nueva longitud del arreglo
let newLength2 = numbers.unshift(0, 4);
console.log(newLength2);
console.log(numbers);

// .push(element1, element2 ....) - añade uno o mas elementos al final del array y devuelve la nueva longitud del arreglo
let newLength = numbers.push(6);
console.log(newLength);
console.log(numbers);


/********
 * otros metodos */

// .indexOf() - devuelve el primer indice del elemento que coincida con el valor especificado, o -1 si no lo encuentra
console.log(numbers.indexOf(6));
console.log(numbers)

// .lastIndex() - devuelve el ultimo indice del elemento que coincida con el valor especificado, o -1 si no lo encuentra
console.log(numbers.lastIndexOf(4));

// reverse() - invierte el orden de los elementos del array
console.log(numbers.reverse());

// .join("separador") - devueleve un string con el separador que indiquemos, por defecto son comas
console.log(numbers);
let join_vacio = numbers.join();
console.log(join_vacio);

// el separador va entre comillas
let join_guion = numbers.join("-");
console.log(join_guion);

let join_space = numbers.join(" ");
console.log(join_space);

// .splice(a, b, item) - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
// a - indice de inicio
// b - numero de elementos (opcional)
// item - elementos a añadir en caso de que se añaden (opcional)
console.log(numbers);

//* corta desde el indice que le indiquemos hasta el final (el valor que le corresponda al indice tambien se corta
/* numbers.splice(3);
console.log(numbers);
 */

//* con dos valores se dirige al indice del primer valor y lo elimina junto los siguientes elementos que le indiquemos en el siguiente
/* console.log(numbers);
numbers.splice(2, 2);
console.log(numbers); */

//* si se ponen tres valores, el primero sera el indice, el segundo los valores a eliminar y el tercero los valores nuevos, estos se situaran donde lo indique el indice.
console.log(numbers);
numbers.splice(2, 2, 1,5);
console.log(numbers);

// si el segundo valor es 0 solo se eliminara el valor del indice  y se agregaran los valores que hallan apartir del tercer valor
console.log(numbers);
numbers.splice(2, 0, 8, 6)
console.log(numbers);

