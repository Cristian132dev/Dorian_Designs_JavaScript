/*
   Escribe un programa que pida un numero entero mayor que 1 y que escriba si el numero es primo o no
   un numero primo es aquel que solo es divisible por si mismo y la unidad
*/

let num = parseFloat(prompt("Digite un numero que no sea: \n - El numero 1 \n - Un numero decimal"));

// si el numero es uno, entra en el while, sino, este pasara de el
while(num == 1 || num % 1 != 0 || isNaN(num)) {
   num = parseFloat(prompt("Su programa fallo exitosamente:\n - Asegurese de que no digito el numero 1 \n - Asegurese que no digito un numero decimal \n - Asegurese de que digito un numero"))
}



if(num / num == 1 && num / 1 == num && num % 2 != 0) {
   alert("Su numero es primo")
} else if(num == 2 ){
   alert("Su numero es primo")
} else {
   alert("Su numero no es primo")
}
