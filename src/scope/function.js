function sayHello() {
   let user = "Ana";
   //Creamos una variable con scope local con 'let'
   if (user === "Ana") {
      console.log(`Hello ${user}!`);
   }
   //El bloque condicional puede acceder a la variable ya que esta dentro del bloque donde se declaro la variable.
}

sayHello();

console.log(user);
//Este codigo NO va a poder acceder a la variable dentro de la función ya que esta NO es global y solo funciona dentro de su scope.
