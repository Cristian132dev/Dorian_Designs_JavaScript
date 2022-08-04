/*
   Son estruccturas de datos que representan propiedades, valores y acciones que puede realizar el objeto.

   objeto = {
      clave(key): valor(value)
   }

   para acceder a las propiedades o metodos se usa la nomenclatura del punto (object.key)
*/

const person = {
   name: "juan",
   age: 26,
   sons: ["Laura", "Diego", "Pepe", "Rosa", "Tomas"]
}

// esta es la nomenclatura del punto para acceder a las propiedades
console.log(person.name);

// se puede buscar usando llaves cuadradas pero lo que pongamos en las llaves debe estar entre comillas
console.log(person["name"]);

// para recorrer los keys del objeto se usa un for in, el for of no se puede utilizar ya que dice que el objeto no es iterable, como si lo es un array
for(const key in person){
   console.log(person[key]);
}

// este es el caso en el que podemos usar for of, ya que estamos apuntando directamente al array y no al objeto, por ello no nos arroja error
for(const son of person.sons){
   console.log(son)
}