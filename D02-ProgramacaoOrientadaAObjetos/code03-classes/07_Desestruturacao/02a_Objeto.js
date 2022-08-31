//02a_Objeto.js
let pessoa = {nome: "Edson Moreno", idade: 42};
let {idade: aIdade, nome, peso: oPeso=100} = pessoa;

console.log("O nome é: "  + nome)
console.log("A idade é: " + aIdade)
console.log("O peso é: "  + oPeso)

