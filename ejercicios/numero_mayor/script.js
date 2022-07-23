let numbers = document.getElementById("numbers");
let result = document.getElementById("result");

let a = parseInt(prompt("introduzca el primer valor"));
let b = parseInt(prompt("introduzca el segundo valor"));
let c = parseInt(prompt("introduzca el tercero valor"));

if (isNaN(a) == true ) {
   a = 0;
}
if (isNaN(b) == true) {
   b = 0;
}
if (isNaN(c) == true) {
   c = 0;
}

console.log(a)

numbers.textContent = `Los numeros introducidos son a:${a}, b:${b} y c:${c}`

if (a >= b && a >= c) {
   if (b > c) {
      result.textContent = `El orden de los valores es ${a},${b} y ${c}`
   } else if (c > b) {
      result.textContent = `El orden de los valores es ${a},${c} y ${b}`
   }
} else if (b >= a && b >= c) {
   if (c > a) {
      result.textContent = `El orden de los valores es ${b},${c} y ${a}`
   } else if (a > c) {
      result.textContent = `El orden de los valores es ${b},${a} y ${c}`
   }
} else if (c >= b && c >= a) {
   if (b > a) {
      result.textContent = `El orden de los valores es ${c},${b} y ${a}`
   } else if (a > b) {
      result.textContent = `El orden de los valores es ${c},${a} y ${b}`
   }
}