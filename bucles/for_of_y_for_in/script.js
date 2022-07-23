/******************
 * Palabras reservadas de bucles
 *
 * break - rompe el bucle
 * continue - se salta la posicion que le indiquemos y despues continua su ejecucion
 */


/******************
 * For Of
 *
 * es una manera simplificada de representar un for convencional donde una variable a la que nosotros ponemos nombre
 * recorrera cada valor del array y tomara su valor, lo que permite que por cada vuelta lo pintemos
 */

let names = ["Paco", "Jose", "Paula", "Maria"];

for(let name of names){
   console.log(name);
}

/*
   si se necesita obtener el indice en el propio for of debemos hacerlo asi, esto es solo cuando por algun motivo queremos
   obtener el indice de uno o algunos elemetos, ya que si los queremos todos es mejor utilizar el for in
*/
for (const name of names) {
   console.log(names.indexOf(name))
}


/******************
 * For In
 *
 * es una manera simplificada de representar un for convencional donde una variable a la que nosotros ponemos nombre
 * recorrera cada indice de la cadena y tomara su posicion, lo que permite que por cada vuelta lo pintemos
 */

for(let index in names){
   console.log(index);
}

/*
   si se necesita el valor de uno o algunos elementos se hace de la siguiente forma, si se requieren todos, lo ideal es usar
   for of
*/

for(let index in names) {
   console.log(names[index])
}