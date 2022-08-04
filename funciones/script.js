/*
   las funciones son fragmentos de codigo que escribimos para ejecutar una tarea y no volver a escribir el mismo codigo mas de una vez("Don't Repeat Yourself")

   nos ayudan a modularizar el codigo (ordenado)

   las funciones deben realizar una sola tarea, por lo tanto es mejor tener varias funciones con distintas tareas que una sola funcion con 200 lineas de codigo

   * funciones pasadas
   function nombreFuncion(){
      codigo a ejecutar
   }

   * funciones flecha (actual)
   const nombreFuncion = () =>{
      codigo a ejecutar
   }


   Pueden recibir parametros, no hay limite de cantidad

   function nombreFuncion(parametro1, parametro2){
      codigo a ejecutar
   }

   const nombreFuncion = (parametro1, parametro2) => {
      codigo a ejecutar
   }


   Pueden devolver valores

   function nombreFuncion (parametro1, parametro2){
      return parametro1 + parametro2
   }

   const nombreFuncion = (parametro1, parametro2) => parametro1 + parametro2

*/

function saludar(){
   console.log("Hola Mundo xD")
}
function saludar_usuario(user){
   console.log(`Hola ${user} xD`)
}


const despedir = () => console.log("Chao Mundo")
const despedir_usuario = (user) => console.log(`chao ${user}`)

saludar()
saludar_usuario("marta")
despedir()
despedir_usuario("pepe")

/*******************************************************/

// si se abren llaves, el lenguaje da por hecho que vamos a escribir mas lineas de codigo, por lo tanto no retornara nada si no se lo indicamos
const suma = (num1, num2) => {
   if(num1 == 2){
      return num1 + num2
   }
   //  el return detiene la funcion cuando se le encuentra, similar al break
   console.log("ESTO NO SE VA A EJECUTAR SI ENTRA EN EL IF")
}

suma(2, 4)

/**********************************************************/

// la funcion flecha de una sola linea de codigo retorna por defecto sin declarar el return
const resta = (num1, num2) => num1 - num2

let resultado = resta(7,2);

console.log(resultado)
