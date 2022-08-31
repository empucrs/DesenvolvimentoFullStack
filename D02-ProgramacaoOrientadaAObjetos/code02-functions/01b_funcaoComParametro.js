// 01b_funcaoComParametro
function potencia(base, expoente = 2) {
    let resultado = 1;
    for (let cont = 0; cont < expoente; cont++) {
       resultado *= base;
    }
    return resultado;
 }
 
 console.log(potencia());
 console.log(potencia(4));
 console.log(potencia(2,6));
 console.log(potencia(2,6,18));