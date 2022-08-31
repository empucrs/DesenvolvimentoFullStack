//03a_simpleAsync.js
async function fazAlgo() {

    let promise =  new Promise((resolve, reject) => {
        setTimeout(() =>  resolve("Pedido atendido"), 2000);
      });

    let resultado = await promise;

    return resultado;

  } 
  
  async function main() {
    console.log("Iniciando o programa")
    console.log( await(fazAlgo()) )
    console.log("Finalizando o programa")
  }

  main()