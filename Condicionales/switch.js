/*********
 * switch es una condicional que esta estructurado en casos
 */

// switch simple:

let num = 4;

switch (num) {
   case 1: console.log("el numero es 1");
      break;
   case 2: console.log("el numero es 2");
      break;
   default: console.log("el numero no es ni 1 ni 2");
      break;
}

/* switch (num) {
   case 1:
      console.log("el numero es 1");
      break;
   case 2:
      console.log("el numero es 2");
      break;
   default:
      console.log("el numero no es ni 1 ni 2");
      break;
} */


// Switch Multiple

switch (num) {
   case 1: case 3: case 5:
      console.log(`${num} es un numero impar`);
   case 2: case 4:
      console.log(`${num} es un numero par`);
}

/* switch (num) {
   case 1:
   case 3:
   case 5:
      console.log(`${num} es un numero impar`)
      break;
   case 2:
   case 4:
      console.log(`${num} es un numero par`)
      break;
}
 */


let variable = false;

switch (variable) {
   case true:
      console.log("el programa funciona perfecto, sin fisuras");
      break;
   case false:
      console.log("el programa fallo exitosamente");
      break;
}

switch (num) {
   case 1:
   case 2:
      console.log("el numero es uno o dos");
      break;
   case 3:
   case 4:
      console.log("el numero es tres o cuatro");
      break;
   case 5:
   case 6:
      console.log("el numero es cuatro o cinco");
      break;
   default:
      console.log("algo malio sal");
      break;
}