console.log(thing); //Va a dar como resultado "undefined", ya que se reconoce la variable pero NO su valor.
var thing = "one thing";

printThing(); //Se puede llamar a la función ANTES de ser definida.

function printThing() {
   console.log(`This is printing ${otherThing}`); //La variable va a dar como resultado "undefined".
}

var otherThing = "another thing";
