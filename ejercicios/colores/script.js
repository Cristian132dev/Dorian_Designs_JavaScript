/*
dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"], determinar si un color introducido por el usuario a traves de un prompt se encuentra dentro del array o no
*/
let colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

let color_usuario = prompt("dame un color para verificar").toLowerCase()

console.log(color_usuario)
while(color_usuario == ""){
   color_usuario = prompt("El programa fallo exitosamente: \n asegurese que escribio y envio correctamente le mensaje")
}

if (colores.includes(color_usuario)) {
   alert("Su color si se encuentra en nuestra base de datos")
} else {
   alert("lo sentimos, color si se encuentra en nuestra base de datos :(")
}