/*
   Solicita un numero e imprime todos los numeros pares e impares desde 1 hasta el numero con el mensaje "es par" o "es impar"
   si el numero es 5 el resultado sera:
   1 - es impar
   2 - impar
   3 - es impar
   4 - impar
   5 - es impar
*/

let num = parseInt(prompt("que numero desea we"))

for(let i = 1; i <= num; i++){
   if(i % 2 == 0){
      console.log(`${i} - es par`);
   } else {
      console.log(`${i} - es impar`);
   }
}