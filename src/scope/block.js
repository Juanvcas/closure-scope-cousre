function fruits() {
   if (true) {
      var fruit1 = "Apple";
      let fruit2 = "Orange";
      const fruit3 = "Strawberry";
   }
   console.log(fruit1); //Esta se va a poder imprimir ya que es una variable Global.
   console.log(fruit2); //Esta NO se va a poder imprimir ya que esta en un Block scope.
   console.log(fruit3); //De igual forma a esta variable no se puede acceder ya que obedece al scope Block.
}

fruits();
