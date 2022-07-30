/*
   Dado un array de letras, solicita un numero de DNI y calcula que letra le corresponda. El numero no puede ser negativo ni tener mas de 8 digitos. La posicion de la letra es el resultado del modulo del numero introducido entre 23
*/

let dni;
const letras = ["T", "R", "W", "A", "G", "M", "P", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];


do {
   dni = prompt("digite su DNI")
}
while (dni.length <= 7 || dni <= 0) 

dni %= 23

alert(letras[dni])