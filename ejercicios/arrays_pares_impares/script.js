/*
   Crea 3 arrays. el primero tendra 5 numeros y el segundo se llamara pares y el tercero se llamara impares, ambos estaran vacios.
   despues multiplica cada uno de los numeros del primer array por un numero aleatorio entre 1 y 10, si el resultado es par guarda ese numero en el array de pares y si es impar en el array de impares. muestra por consola:
   - la multiplicacion que se produce junto con su resultado con el formato 2 x 3 = 6
   - el array de pares e impares
*/

let numeros = [21, 44, 87, 79, 12], pares = [], impares = [];
let min = 1, max = 1, random, resultado;


for (let i of numeros) {
   random = (Math.random() * (max - min) + min).toFixed();
   resultado = i * random
   if(resultado % 2 == 0){
      pares.push(resultado);
   } else {
      impares.push(resultado);
   }
   console.log(`${i} x ${random} = ${resultado}`)
}
console.log(`Numeros Pares: ${pares}\nNumeros Impares: ${impares}`)