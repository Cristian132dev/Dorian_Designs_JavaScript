let num = parseFloat(prompt("digite un numero y para flotarlo a un multiplo de 5 siguiente "))
let newNum

/* mientras num no sea un numero, no seguira corriendo el codigo */
while (isNaN(num)) {
   let num = prompt("digite un numero y para flotarlo a un multiplo de 5 siguiente ")
}

if (num.length == 1) {
   if (num > 5) {
      newNum = 10;
      alert(`digito el numero ${num} y quedo ${newNum}`)
   } else {
      newNum = 5;
      alert(`digito el numero ${num} y quedo ${newNum}`)
   }
} else {
   alert(`digito el numero ${num} y quedo ${(num - (num % 10)) + 5}`)
}
