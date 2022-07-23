/**********
 * el operador ternario se utiliza cuando una condicion sera true o false, al igual que el if
 * su ejecucion puede tener varias sentencias, en este caso iran separadas por comas
 */

let num = 7;

(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);


/* este es el operador ternario compuesto, sus resultados van entre parentesis separados por comas */
(num % 2 == 0) ?
   (
      console.log(`${num} es par`),
      console.log(`${num} es par`)
   )
   :
   (
      console.log(`${num} es impar`),
      console.log(`${num} es impar`)
   );


   if (2 + 2 == 4) {
      console.log("Funciona perfecto")
   }


let resultados = (num != 2) ? (console.log("si esta bien we")) : (console.log("esta mal we"));

(num == 7) ? (
      (console.log("funciona shido, al chile bien prron")),
      (console.log("funciona mejor de lo que pensaba we"))
   ) : (
      (console.log("no mrk la cago, su programa fallo exitosamente"))
   );


let casas = 2;

(casas > 1) ? console.log("Sos Millonario") : console.log("Sos pobre");

(casas > 5) ? (
   console.log("sos re rico"),
   console.log("y guapo")
) : (
   console.log("sos re pobre"),
   console.log("y feo")
)