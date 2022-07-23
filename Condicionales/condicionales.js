/******
 * Condicional Simple */

let num = 5;

if (num > 0) console.log(`${num} es mayor que 0`);

if (num > 0) {
   console.log(`${num} es mayor que 0`);
}

/*******
 * Condicional Compuesto */

if (num>0){
   console.log(`${num} es mayor que 0`);
} else {
   console.log(`${num} es menor que 0`);
}

/********
 * Condicional Multiple
 */

if (num > 0) {
   console.log(`${num} es mayor que 0`);
} else if (num < 0) {
   console.log(`${num} es menor que 0`);
} else {
   console.log(`${num} es igual a cero`)
}

/***********
 * Operadores Logicos
 * && AND: si los valores son true, entra a la condicion
 * || OR: sin una de las condiciones es true, entra a la condicion
 */

let num1 = 0, num2 = 5;

if (num1 >=0 && num2 >= 0) {
   console.log(`${num1} y ${num2} son mayores que 0`)
}

if (num1 > 0 || num2 > 0) {
   console.log(`${num1} o ${num2} son mayores que 0`)
}