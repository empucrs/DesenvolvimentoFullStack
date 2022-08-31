//03a_simpleAsync.js
async function fazAlgo() {

    let promise =  new Promise((resolve, reject) => {
        setTimeout(() =>  resolve("Pedido atendido"), 2000);
      });

    let resultado = await promise;

    return resultado;

  } 
  
console.log("Iniciando o programa")
fazAlgo().then((msg) => console.log(msg))
console.log("Finalizando o programa")  
