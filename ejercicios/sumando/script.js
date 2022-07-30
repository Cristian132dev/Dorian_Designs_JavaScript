/*
   Escribe un programa que permita ir introduciendo una serie indeterminada de numeros mientras su suma no supere 50. cuando esto ocurra, se debe mostrar el total acumulado y el cotador de cuantos numeros se han introducido

   *preguntar
   *sumar
   *comparar
   *guardar
   *contador
*/

let contador = 0, num = 0;

do {
   newNum = parseInt(prompt("ingrese una cifra"));
   contador++;
   num += newNum;
} while (num <= 50);
console.log(`El programa finalizo correctamente: \nEl total acumulado es ${num} e ingreso ${contador} numero(s)`);