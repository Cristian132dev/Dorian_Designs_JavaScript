/************
 * Objeto Math
 * se usa para operaciones matematicas mas especificas
 * al ser un objeto tambien se utiliza la nomenclatura del punto
 */

let max = 10, min = 5;

/* Math.E: devuelve la constante de Euler, no se que es eso xd */
console.log(Math.E);

/* Math.PI: devuelve la constante de pi */
console.log(Math.PI);

/* Math.abs(x): devuelve el valor absoluto de x (numero sin signo) */
console.log(Math.abs(-2));
console.log(Math.abs(2));

/* Math.ceil(x): redondea un numero decimal hacia su entero mayor  */
console.log(Math.ceil(5.8));
console.log(Math.ceil(-5.8));

/* Math.floor(x): redondea un numero decimal hacia su entero menor */
console.log(Math.floor(5.8));
console.log(Math.floor(-5.8));

/* Math.pow(X, Y): Devuelve la potencia de X elevado a Y */
console.log(Math.pow(2, 3));
console.log(2**3);

/* Math.sqrt(x): devuelve la raiz de x*/
console.log(Math.sqrt(9));
console.log(Math.sqrt(3));

/* Math.random(): genera un numero pseudoaleatorio entre 0 y 1 */
console.log(Math.random());

console.log(Math.round(Math.random() * 100));
console.log(Math.random() * (max - min) + min);

/* Math.round(x): Devuelve el valor de un numero redondeado al entero mas cercano */
console.log(Math.round(5.6));
console.log(Math.round(5.5));
console.log(Math.round(5.4));

/* Math.sign(x): devuelve el signo de la x, que indica si x es positivo, negativo o cero */
console.log(Math.sign(-5));
console.log(Math.sign(0));
console.log(Math.sign(5));