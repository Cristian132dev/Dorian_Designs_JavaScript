/***********
 * son estructuras que nos permiten almacenar varios datos y agruparlos
 * se puede llenar con cualquier tipo de dato, pero no es recomendable
 * se pueden mezclar tipos de datos pero no es recomendable
 */

let numeros = [1,2,3,4,5];
console.log(numeros);

/* se pueden sumar los indices como se ve, pero creo que es totalmente innecesario, o almenos no le veo la utilidad */
console.log(numeros[4] + numeros[1]);

let palabras = ["hola", "estamos", "en" , "Youtube"];
console.log(palabras);

console.log(`La palabra "${palabras[3]}" tiene ${palabras[3].length} letras`);