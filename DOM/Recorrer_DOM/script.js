const parent = document.getElementById("parent");

// *SOLO VOY A APRENDER LOS NODOS UTILES, EL RESTO LOS VOY A IGNORAR PORQUE NO CREO QUE LOS UTILICE

//* padre - parent (nodo del que desciende)

// parentElement - nodo del que desciende
console.log(parent.parentElement);

//! los nodos del tipo document y documentFragment nunca van a tener un elemento padre, parentNode devolvera siempre null


//* Hijo - child (nodo que desciende de un padre)

// children - devuelve un objeto con todos los nodos sin saltos de linea
console.log(parent.children);

// firstElementChild - devuelve el primer nodo del elemento
console.log(parent.firstElementChild);

// lastElementChild - devuelve el ultimo nodo del elemento
console.log(parent.lastElementChild);

// hasChildNodes() - devuelve un booleno, true si tiene hijos, false sino ¯\_(ツ)_/¯
console.log(parent.hasChildNodes());


// *Hermanos - siblings (nodos al mismo nivel)

// nextElementSibling - devuelve el siguiente nodo hermano
console.log(parent.nextElementSibling);

// previousElementSibling - devuelve el anterior nodo hermano
console.log(parent.previousElementSibling);