//variables
var a; //declara la variable
a = "a"; //inicializa la variable

b = "b";
//inicializa una variable que no se declaro, asi que se crea como una variable Global.

var fruit = "orange";
function aFruit() {
   console.log(fruit);
   // Se puede imprimir porque esta accediendo a una variable Global.
}

aFruit(); // 'orange'.

function aCountry() {
   country = "Colombia";
   console.log(country);
   //Se puede imprimr porque esta accediendo a una variable que se creo automaticamente como Global.
}

aCountry(); // 'Colombia'.
console.log(country);
//Puede acceder a la variable asi este dentro de una función ya que es una variable Global no importa si esta dentro de una función o bloque.
