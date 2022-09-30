pi = 3.1416;
console.log(pi);
// Se puede imprimir porque el hoisting de JS interpreta que es una variable a pesar de que no se haya declarado.

("use strict");
//De esta forma podemos activar el modo estricto en JS.
pi = 3.1416;
console.log(pi);
// NO se va a poder imprimir ya que se implemento el modo estricto de JS, y basicamente va a "desactivar" el hoisting y no va a crear variables automaticamente.

//Podemos utilizar el modo estricto solo dentro de un bloque.
const aFunction = () => {
   "use strict";
   return (pi = 3.1416);
};

console.log(aFunction());
//NO se va a poder imprimir ya que se esta utilizando el modo estricto dentro de la función que se llama.
