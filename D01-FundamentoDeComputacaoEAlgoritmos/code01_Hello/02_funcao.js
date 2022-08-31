// video 1 - 26:15
function avaliaParidade(limiteSuperior){
  for(let i=0; i<limiteSuperior; i++){
    if(i%2==1)
      console.log(i+" é um número Ímpar");
    else
      console.log(i+" é um número PAR");
  } 
}  

avaliaParidade(10)