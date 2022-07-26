/*
   Escriba un programa que pida un numero entero mayor que cero y calcule su factorial. el factorial es el resultado de multiplicar ese numero  por sus anteriores  hasta la unidad

   !5 = 5*4*3*2*1 = 120
*/

let resultado = 1;
let num = parseInt(prompt("digite un numero diferente de 0"));

while (num == 0) {
   let num = parseInt(prompt("digite un numero diferente de 0"));

}

for (let i = num; i >= 1; i--) {
   resultado *= i
}
console.log(resultado)