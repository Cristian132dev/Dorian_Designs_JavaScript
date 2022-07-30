/*
Solicitar al usuario una palabra y mostrar por consola el numero de consonantes, vocales y longitud de la palabra
*/

let vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"], consonantes = ["q", "w", "r", "t", "y", "p", "ñ", "k", "j", "h", "g", "f", "d", "s", "z", "x", "c", "v", "b", "n", "m"]

let num_vocales = 0, num_consonantes = 0, caracteres = 0;
let palabra = prompt("dame un palabra, muchacho").toLowerCase()

for(let i of palabra){
   caracteres = palabra.length
   if(vocales.indexOf(i) != -1){
      num_vocales += 1
   } else if (consonantes.indexOf != -1){
      num_consonantes += 1
   }
}
console.log(`La palabra "${palabra}" tiene: \n ${num_vocales} vocale(s) \n ${num_consonantes} consonante(s) \n y ${caracteres} caracteres`)