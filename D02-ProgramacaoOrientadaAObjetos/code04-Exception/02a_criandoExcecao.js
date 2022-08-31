//02a_criandoExceção.js
class ValidationError extends Error {
    constructor(message) {
      super(message); // construtor da superclasse
      this.name = "ValidationError"; // alterando propriedade padrão de Error
    }
  }
  
  function vaiDarErro() {
    throw new ValidationError("Dados inválidos!");
  }

try{
    vaiDarErro()
}
catch (e) {
    console.error(`${e.name}: ${e.message}`);
}
  