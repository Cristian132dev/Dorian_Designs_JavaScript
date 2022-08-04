/*
   * Propiedades

   la manera que conocimos los objetos no son para nada recomendables, lo mejor es usar clases, ya que nos funciona como una plantilla que nos sirve de molde para crear objetos.

   cuando creamos un objeto se le denomina INSTANCIAR

   las clases necesitan obligatoriamente un CONSTRUCTOR y se ejecuta cada vez que creemos un objeto

   por convencion es mejor poner el nombre de la clase en mayuscula para seguir los estandares

      class NombreClase{
         constructor(propiedad1, propiedad2...){

            this.propiedad1 = propiedad1
            this.propiedad2 = propiedad2
         }
      }

   se pueden asignar propiedades que no haya en los parametros, pero siempre utilizando this para referenciar al objeto

   * Metodos

   los objetos pueden tener  funciones asociadas a el, solo que en las clases se les denomina METODOS

   saludar() {
      return `Hola, me llamo ${this.nombre} y tengo ${this,edad} años`;
   }

   * Crear objetos

   para instanciar un objeto utilizando la clase se hace con la palabra reservada "new" y el nombre de la clase que queremos utilizar

   const miObjeto = new NombreClase(parametro1, parametro2...)

   una vez instanciado el objeto podemos acceder a sus propiedades y metodos con la nomenclatura del punto o buscando su propiedad en el objeto

   miObjeto.nombre
   miObjeto.saludar()

   miObjeto["nombre"]
   miObjeto["saludar"]()


*/

class Persona{
   constructor(nombre, apellido, edad){

      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;

      // se pueden incluir datos sin necesidad de parametros, y se le puede agregar o no el this, porque estamos dentro del constructor
      this.datos = `Hola, mi nombre es ${this.nombre} ${apellido} y tengo ${edad} años`
   }

   saludar(){
      return `Hola, mucho gusto me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años. y tu?`
   }
}

const juan = new Persona("Juan", "Perez", 18);
const martha = new Persona("Martha", "Bolaños", 52);

console.log(martha)
console.log(martha.nombre)
console.log(martha.apellido)
console.log(martha.edad)
console.log(martha.datos)
console.log(martha.saludar())