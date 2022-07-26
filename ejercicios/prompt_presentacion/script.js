/*
   Solicita un nombre, la edad y muestra por consola el mensaje "Hola _____, tienes ______ años y el año que viene tendras___ años"
   realiza el ejercicio con prompt(mensaje) y haz uso de los templates strings
*/

let nombre = prompt("Cual es tu nombre");
let edad = parseInt(prompt("Cual es tu edad"));

console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendras ${edad + 1} años`);