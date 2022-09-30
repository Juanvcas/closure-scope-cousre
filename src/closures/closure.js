const value1 = 1;

function mainFunction() {
   const value2 = 2;
   console.log(value1); //Accede a un valor global.

   function parentFunction() {
      //Función interna
      const value3 = 3;
      console.log(value1, value2); //Accede a un valor fuera de su contexto.

      function childFunction() {
         //Función interna
         console.log(value1, value2, value3); //Accede a un valor fuera de su contexto.
      }

      return childFunction(); //Se llama a la función dentro de otra función.
   }

   return parentFunction(); //Se llama a la función dentro de otra función.
}

mainFunction();
