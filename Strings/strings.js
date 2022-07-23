/* Strings */
//            0123456789
let cadena = "Hola Mundo";

/* propiedades: devuelven caracteristicas de la cadena  */

/* length: Devuelve la longitud de la cadena, los espacios cuetan */
console.log(cadena.length);

/* Metodos: es todo aquello que la cadena puede hacer. en algunas ocasiones devuelven una cadena nueva y la cadena original no se toca. para guardar las nuevas cadenas se deben agregar a una nueva variable o asignarle de nuevo a la misma variable. los metodos finalizan con parentesis y en algunas ocasiones llevan parametros */

/* toUpperCase(): devuelve la cadena a mayusculas */
console.log(cadena);
let cadena_mayus = cadena.toUpperCase();
console.log(cadena_mayus);

/* toLowerCase: devuelve la cadena a minusculas */
console.log(cadena_mayus.toLowerCase());


/* indexOf(string): devuelve el index en el que se encuentra el string, si no lo encuetra devuelve -1 */
console.log(cadena.indexOf("o"));

/* replace(valor a buscar, valor nuevo): reemplazamos el valor de la cadena y pone uno nuevo, de igual manera no reemplaza la cadena original */
console.log(cadena.replace("Hola", "Hello"));
console.log(cadena);

/* subtring(inicio [,fin]): extrae los caracteres desde inicio hasta fin (el final no se incluye), sino se incluye el fin, extrae hasta el fin */
console.log(cadena.substring(2));
console.log(cadena.substring(3, 7));

/*slice, igual a substring con la diferencia que admite valores negativos, que es igual a que tomara los valores del final hacia el inicio */
console.log(cadena.slice(-3));
console.log(cadena.slice(0, -2));

/* trim(), elimina los espacios en blanco del inicio y del  final de la cadema */
let cadena_con_espacios = "    hay mi madre, el bisho      ";
console.log(cadena_con_espacios.trim());

/* startsWith(valor [,inicio]): sirve para saber si la cadena empieza con ese valor, devuelve true o false, como segundo valor podemos poner el indice desde donde queremos que coincida */
console.log(cadena.startsWith("Hola"));
console.log(cadena.startsWith("H"));
console.log(cadena.startsWith("h"));
console.log(cadena.startsWith(" "));

console.log(cadena.startsWith("Mu", 5));

/* endsWith(valor [,longitud]: sirve para saber si la cadena termina con ese valor, devuelve true o false, como segundo valor podemos poner el indice hasta donde queremos que coincida*/
console.log(cadena.endsWith("o"));
console.log(cadena.endsWith("a", 4));
console.log(cadena.endsWith("Mundo"));

/* includes(valor[,inicio]): igual que indexOf pero devuelve true o false, como valor opcional se pone el indice desde donde se quiere hacer la busqueda */
console.log(cadena.includes("H"));
console.log(cadena.includes("h"));
console.log(cadena.includes("a", 3));

/* repeat(valor): repite el string el numero de veces que le indiquemos */

console.log(cadena.repeat(2));
console.log("r".repeat(12));

/* search(): busca un valor y devuelve su ubicacion, igual que index of*/
console.log(cadena.search("Mun"))

/*************
 * templates Strings
 */

let nombre = "juan";
let apellido = "Gomez";
let edad = 20;

console.log("Hola", nombre, apellido,". tienes", edad, "años");
console.log("Hola " + nombre + apellido +". tienes"+ edad + "años");

/* los templates strings ayudan a poner variables de una manera mas ordenadas, incluso se pueden hacer operaciones dentro de estas */
console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años, el proximo tendras ${edad + 1} años`);