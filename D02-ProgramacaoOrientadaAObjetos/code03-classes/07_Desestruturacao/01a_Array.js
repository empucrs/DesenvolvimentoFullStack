//01a_Array.js
let nomeCompleto = ['Edson', "Ifarraguirre", "Moreno"];
var [primeiroNome, nomeDoMeio, ultimoNome] = nomeCompleto;

console.log("O primeiro nome é: "+primeiroNome)
console.log("O nome do meio é: " +nomeDoMeio)
console.log("O último nome é: "  +ultimoNome)

var [primeiroNome, ...restante] = nomeCompleto
console.log("O primeiro nome é: "+primeiroNome)
console.log("O restante do nome é: \"" +restante.toString().replace(',', ' ')+'"')

var [soOPrimeiroNome, ,soOUltimoNome] = nomeCompleto
console.log("O primeiro nome é: "+soOPrimeiroNome)
console.log("O último nome é: "  +soOUltimoNome)

